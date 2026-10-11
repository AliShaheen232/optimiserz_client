interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

interface Inquiry {
  fullName?: string;
  email?: string;
  company?: string;
  service?: string;
  details?: string;
  consent?: boolean;
  website?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: Inquiry;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (body.website) return json({ ok: true });

  const fullName = clean(body.fullName, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const service = clean(body.service, 120);
  const details = clean(body.details, 5000);

  if (fullName.length < 2 || !emailPattern.test(email) || !service || details.length < 15 || body.consent !== true) {
    return json({ error: "Please check the form and try again." }, 422);
  }

  const rows: [string, string][] = [
    ["Name", fullName],
    ["Email", email],
    ["Company", company || "Not given"],
    ["Service", service],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${details}`;
  const html = `
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#667"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join("")}
    </table>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${escapeHtml(details)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: email,
      subject: `New inquiry: ${service} — ${fullName}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return json({ error: "We couldn't send your message right now." }, 502);
  }

  return json({ ok: true });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact") {
      if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
