# Optimiserz — Brand & Development Guide

This file is the single source of truth for how Optimiserz looks, sounds and gets built. Read it before you touch the design or start a new feature.

---

## 1. Brand

### What we stand for

Optimiserz helps two kinds of people:

| Who | Their problem | Our promise |
| --- | --- | --- |
| Founders with an idea | Scared of spending big on something that may not work | **Prove your idea** before you spend big |
| Business owners | Too much manual work, slow site, low reach | **Grow your business** by cutting busywork |

Tagline: **Prove your idea. Grow your business.**
Short form: **Validate. Optimise. Grow.**

The brand story is a simple line: **Idea → Proof → Growth.** It shows up in the hero, and it should guide every page we add.

### Voice

- Short. One idea per sentence. If a line needs two reads, cut it.
- Plain words. Say "save time", not "drive operational efficiency".
- Honest. No fake stats, no "revolutionary", no guarantees we can't keep.
- Friendly but sure of itself, like a good engineer talking to a client over coffee.

Content rules for the website:

- Headline: 8 words max.
- Supporting line: 20 words max.
- Card text: 1 line (about 10 words).
- Bullet lists: 3 items max.
- If a section needs a paragraph, it probably needs to be two sections or a separate page.

### Logo

- **Mark:** an open ring (the "O") with a cyan-to-violet gradient and an amber dot where it opens — the spark of an idea breaking out of the circle. File: `public/favicon.svg`, component: `src/components/ui/Logo.tsx`.
- **Wordmark:** `optimiserz` in lowercase, Sora SemiBold, in `fg` (near-white).
- Keep clear space around the logo equal to the height of the ring.
- Don't stretch, recolour, outline or add shadows to it.

---

## 2. Colours — "Aurora" theme

Light and futuristic, slightly dimmed. A cool blue-grey page with soft cyan, violet and amber glows, white-ish cards, and a dark ink button for actions.

| Token | Hex | Use it for |
| --- | --- | --- |
| **`page`** | **`#EDF1F8`** | **Main background** |
| `alt` | `#E4EAF4` | Alternating sections, footer |
| `surface` | `#F8FAFD` | Cards, modals |
| `line` | `#D6DEEB` | Borders |
| `ink` | `#0B1426` | Headings, text, primary buttons |
| `ink-soft` | `#45536B` | Body text |
| `ink-mute` | `#7A879C` | Placeholders, small labels |
| `cyan-400` / `cyan-600` | `#1BA8E0` / `#0E7FB8` | Gradient start / small accent text |
| `violet-500` / `violet-600` | `#6466F0` / `#4F50D8` | Gradient end / eyebrow labels, links |
| `spark` | `#FFB547` | Tiny highlights only (logo dot, idea icon) |

**Signature gradient** (`bg-accent`): `#1BA8E0 → #6466F0`. Used for icon chips, the Core hub, the "Not sure what you need?" card and gradient heading words.

**Aurora** (`.aurora`): three soft radial glows (cyan left, violet right, amber low) behind the hero and inside the Core panel.

**Glass** (`.glass`): white at 60% with blur and a white border. Used for the floating navbar and Core layer cards.

## 3. Typography

| Role | Font | Weights |
| --- | --- | --- |
| Headings | **Sora** (Google Fonts) | 600, 700 |
| Body and UI | **Manrope** (Google Fonts) | 400, 500, 600, 700 |
| Tech labels | **JetBrains Mono** (Google Fonts) | 400, 500 |

Sora is wide and geometric, like the display font on the old site, but cleaner. Manrope is easy to read at small sizes.

Scale used on the site:

- H1: 48–60px, bold, line-height 1.1
- H2: 30–36px, semibold
- H3: 18–24px, semibold
- Body: 16–18px
- Small: 14px
- Eyebrow labels: 11px JetBrains Mono, uppercase, wide letter-spacing, `cyan-400` (`.label` class)

---

## 4. Theme and UI rules

Signature elements:

- **Floating glass navbar** with a dark "Discuss a project" button.
- **Compact centered hero:** eyebrow pill, one-line headline with a gradient half, one sentence, dot-separated service tags. No buttons.
- **Service grid:** 4 columns of cards with gradient icon chips, plus one gradient "Not sure what you need?" card.
- **Optimiserz Core orbit:** a gradient hub with five glass layer cards around it, joined by dashed lines. On phones and tablets it becomes a simple grid.

Reusable classes (in `src/index.css`): `.btn-primary`, `.btn-ghost`, `.card`, `.glass`, `.icon-chip`, `.field`, `.label`, `.text-gradient`, `.aurora`.

All tokens live in `tailwind.config.js`. Never hard-code hex values in components.

## 5. Website structure

| # | Section | Goal |
| --- | --- | --- |
| 1 | Hero | Compact: eyebrow, headline, one sentence, service tags |
| 2 | What We Build | Seven service cards with "Learn more" detail modals: Websites & Web Apps, AI & Automation, Search & AI Visibility (SEO + GEO), Blockchain, Email Infrastructure & Marketing, Hosting & Care, Bot Development |
| 3 | Optimiserz Core | Orbit of the five tech layers |
| 4 | Paths | "Where are you right now?" Idea vs business |
| 5 | How it works | Talk → Plan → Build → Grow |
| 6 | Why us | Start small, plain talk, you own it |
| 7 | Contact | Inquiry form + direct email + what to expect |

**Contact is email only.** No phone number anywhere on the site.

Form fields: full name, business email, company (optional), service of interest, project details, consent. No budget field. The form posts to `/api/contact` (Cloudflare Worker in `worker/index.ts`), which sends the inquiry to `contact@optimiserz.com` through Resend. The path cards, the "Not sure" card and "Ask about this" in service modals all scroll to the form and pre-select the matching service.

Copy lives in `src/config/content.ts` (paths, steps, reasons, form options) and `src/config/services.ts` (service cards). Contact details live in `src/config/site.ts`.

---

## 6. Development cycle

Use this cycle for the website and for client projects.

### Phase 1 — Discover (1–3 days)
- Short call: goal, audience, budget, deadline.
- Write a one-page brief: problem, who it's for, what success looks like.
- Output: brief + rough scope.

### Phase 2 — Validate (idea projects only, 1–2 weeks)
- Competitor and market check.
- Clickable prototype (Figma or a quick landing page).
- Show it to 5–10 real users. Collect what they say and do.
- Decide: build, change direction, or stop. Stopping early is a win, not a failure.

### Phase 3 — Plan (2–4 days)
- Break the work into small milestones.
- Fixed scope, timeline and price for each milestone.
- Pick the tech stack based on the client's needs and hosting, not habit.
- Output: signed scope + task board.

### Phase 4 — Design (3–7 days)
- Wireframes first, then UI using this guide's tokens.
- Mobile layout designed at the same time as desktop, not after.
- Client signs off before any code.

### Phase 5 — Build (in 1-week sprints)
- Each sprint ends with something the client can click and test.
- Short weekly update in plain language: done, next, blocked.
- Code review on every pull request.

### Phase 6 — Test
- Works on Chrome, Safari, Firefox, and on a real phone.
- Lighthouse: Performance 90+, Accessibility 95+, SEO 95+.
- Forms, links and emails all tested end to end.
- `npm run build` passes with no errors.

### Phase 7 — Launch
- Deploy to production, check DNS and SSL.
- Submit sitemap to Google Search Console.
- Set up analytics and uptime monitoring.
- Hand over all accounts, code and passwords to the client.

### Phase 8 — Grow and support
- Measure: traffic, leads, time saved.
- Monthly small improvements.
- Hosting, updates and backups on a care plan.

---

## 7. Working on this repo

### Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # type-check + production build
npm run preview  # preview the production build
```

Stack: React 19, TypeScript, Vite 6, Tailwind CSS 3, Lucide icons.

### Folder structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, Paths, Services, Process, Why, Contact
    modals/     Modal, ServiceModal
    ui/         Logo, Container, SectionHeading
  config/
    site.ts     name, email, nav
    content.ts  section copy and form options
    services.ts service card content
  lib/          validation
  types/        shared types
public/         favicon and static files
```

### Rules

- Don't run `tsc` on a single file or with custom flags. It creates `.js` copies next to your `.ts` files, and those break Vite. `npm run build` is the only way to type-check.
- `tsconfig` has `noUnusedLocals` on. Remove unused imports or the build will fail.
- New colours or fonts go into `tailwind.config.js` and this guide first.
- Keep components small. If a file goes past about 150 lines, split it.

### Git

- `main` = live site. Work on branches: `feature/...`, `fix/...`.
- Commit messages: short and clear, for example `Add pricing section`, `Fix mobile menu`.
- Open a pull request, check the preview, then merge.

---

## 8. Next steps for the site

1. **Form sending is live once deployed.** Needs the `RESEND_API_KEY` secret (`npx wrangler secret put RESEND_API_KEY`). Test locally with `npm run dev:worker` and a `.dev.vars` file; plain `npm run dev` has no `/api` route.
2. **Deploy.** The site ships as static assets on Cloudflare Workers (`wrangler.jsonc` serves `dist`). Run `npm run build`, then `npx wrangler deploy`.
3. **Tighten DMARC** from `p=none` to `p=quarantine` once sending is stable.
4. **Add proof:** 2–3 short case studies ("Idea → Proof → Growth" format) as soon as there are client results.
5. **Social preview image** (`og:image`) using the logo and tagline.
6. **Analytics:** Cloudflare Web Analytics (no cookie banner needed).

---

## 9. Compliance notes for bot services

- **Voice / telemarketing bots:** only call people who opted in. In Pakistan follow PTA's Spam & Unsolicited Communication Regulations (2009) and the Do-Not-Call rules. For US clients, AI voices count as "artificial voice" under the TCPA, so prior consent is required.
- **Trading bots:** we build software that runs on the client's own account. We never hold funds, sell signals or promise returns. Those activities need SECP or PVARA licences.
