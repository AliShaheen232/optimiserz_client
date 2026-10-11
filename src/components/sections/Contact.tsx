import React, { useState } from "react";
import { Send, Info, Mail } from "lucide-react";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/site";
import { serviceOptions } from "../../config/content";
import { validateInquiryForm } from "../../lib/validation";
import type { InquiryFormData, ValidationErrors } from "../../types";

interface Props {
  service: string;
  onServiceChange: (service: string) => void;
}

const empty = { fullName: "", email: "", company: "", details: "", consent: false };

const FieldError: React.FC<{ msg?: string }> = ({ msg }) => (msg ? <p className="mt-1.5 text-xs text-rose-600">{msg}</p> : null);

const Label: React.FC<{ htmlFor: string; children: React.ReactNode; optional?: boolean }> = ({ htmlFor, children, optional }) => (
  <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-ink">
    {children} {optional ? <span className="font-normal text-ink-mute">(optional)</span> : <span className="text-cyan-600">*</span>}
  </label>
);

export const Contact: React.FC<Props> = ({ service, onServiceChange }) => {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name === "service") onServiceChange(value);
    else setForm({ ...form, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value });
    setErrors({ ...errors, [name]: undefined });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: InquiryFormData = { ...form, service };
    const found = validateInquiryForm(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const website = (new FormData(e.currentTarget).get("website") as string) || "";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const border = (key: keyof ValidationErrors) => (errors[key] ? "!border-rose-400/70" : "");

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="label text-violet-600">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Have something in mind?</h2>
          <p className="mt-4 text-ink-soft">Tell us what you're building or what needs to improve. We'll reply with honest next steps.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="card p-6 sm:p-8 lg:col-span-8">
            {status === "sent" ? (
              <div className="py-6">
                <h3 className="text-2xl font-semibold">Thanks, {form.fullName.split(" ")[0]}. Message received.</h3>
                <p className="mt-3 text-ink-soft">We'll get back to you at {form.email} soon.</p>
                <button
                  onClick={() => {
                    setForm(empty);
                    onServiceChange("");
                    setStatus("idle");
                  }}
                  className="btn-ghost mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="fullName">Full name</Label>
                    <input id="fullName" name="fullName" value={form.fullName} onChange={update} placeholder="Jane Doe" className={`field ${border("fullName")}`} />
                    <FieldError msg={errors.fullName} />
                  </div>
                  <div>
                    <Label htmlFor="email">Business email</Label>
                    <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="jane@company.com" className={`field ${border("email")}`} />
                    <FieldError msg={errors.email} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="company" optional>Company name</Label>
                    <input id="company" name="company" value={form.company} onChange={update} placeholder="Acme Corp" className="field" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service of interest</Label>
                    <select id="service" name="service" value={service} onChange={update} className={`field ${border("service")}`}>
                      <option value="">Select a service...</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <FieldError msg={errors.service} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="details">Project details</Label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={update}
                    placeholder="What are you building, or what needs to improve?"
                    className={`field resize-none ${border("details")}`}
                  />
                  <FieldError msg={errors.details} />
                </div>

                <div>
                  <label className="flex items-start gap-2.5 text-xs text-ink-soft">
                    <input type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-0.5 h-4 w-4 rounded border-line bg-white accent-violet-500" />
                    I agree that Optimiserz may contact me about this inquiry. No marketing emails.
                  </label>
                  <FieldError msg={errors.consent} />
                </div>

                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                {status === "failed" && (
                  <p className="rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-xs text-rose-200">
                    Something went wrong and your message wasn't sent. Please try again, or email us at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">{siteConfig.email}</a>.
                  </p>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
                  {status === "sending" ? "Sending..." : "Send project inquiry"} <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="card p-6">
              <h3 className="text-base font-semibold">Direct contact</h3>
              <p className="mt-2 text-xs text-ink-soft">Prefer to write directly? Email us:</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-4 flex items-center gap-2 rounded-xl border border-line bg-white p-3 font-mono text-xs text-violet-600 hover:border-violet-400/60">
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Info className="h-4 w-4 text-cyan-600" /> What to expect
              </div>
              <ul className="mt-4 space-y-3 text-xs text-ink-soft">
                {["We review your message and check what's possible.", "A focused chat, not a sales pitch.", "A clear scope and honest advice."].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
