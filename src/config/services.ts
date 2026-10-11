import type { ServiceItem } from "../types";

export const servicesData: ServiceItem[] = [
  {
    id: "web-apps",
    title: "Websites & Web Apps",
    tagline: "Web experiences built around your business.",
    shortDescription: "Business sites, customer portals and SaaS products that are fast, clean and easy to maintain.",
    fullDescription:
      "We build websites and web applications around your users and the way your business actually works. From a landing page to a full SaaS product, we focus on speed, clean architecture and code your next developer can pick up easily.",
    capabilities: [
      "Business websites and landing pages",
      "Custom web apps and client portals",
      "SaaS frontends and backends",
      "Admin panels and dashboards",
      "API development and integrations",
      "Performance audits and refactoring",
    ],
    techFocus: ["React", "Next.js", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "Elasticsearch"],
    honestNote: "We pick the stack based on your needs and budget, not on habit or hype.",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    tagline: "AI that does real work for your team.",
    shortDescription: "LLM tools and agent workflows that read your data, take action, and hand off to people when it matters.",
    fullDescription:
      "We find the repetitive, time-heavy tasks in your business and hand them to AI. That can be a smart assistant over your documents, or a multi-step agent that gathers information, uses your tools and asks a person to approve the important steps.",
    capabilities: [
      "LLM integrations and custom assistants",
      "RAG over your documents and knowledge base",
      "Multi-step agent workflows with tool calling",
      "Document processing and data extraction",
      "Human approval steps for sensitive actions",
      "Logging, retries and audit trails",
    ],
    techFocus: ["Python", "LangChain / LlamaIndex", "OpenAI & Claude APIs", "Vector databases", "FastAPI", "n8n"],
    honestNote: "AI agents work inside clear limits. We don't promise zero errors without human oversight.",
  },
  {
    id: "search-visibility",
    title: "Search & AI Visibility",
    tagline: "Get found on Google and in AI answers.",
    shortDescription: "SEO plus GEO (generative engine optimization), so you show up in search results and in ChatGPT, Gemini and Perplexity.",
    fullDescription:
      "People now find businesses through search engines and AI assistants. We fix the technical side of your site, shape content that answers real questions, and add the structured data that both Google and AI tools rely on.",
    capabilities: [
      "Technical SEO audits and fixes",
      "Core Web Vitals and site speed",
      "Keyword and content strategy",
      "GEO: structured data and AI-friendly content",
      "Google Business Profile and local SEO",
      "Monthly ranking and traffic reports",
    ],
    techFocus: ["Google Search Console", "GA4", "Schema.org", "Ahrefs / Semrush", "Lighthouse"],
    honestNote: "Rankings take time, and nobody can guarantee the #1 spot. We aim for steady, measurable growth.",
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    tagline: "Web3 products, built and tested properly.",
    shortDescription: "Smart contracts, dApps and tokenization on EVM chains and Solana.",
    fullDescription:
      "Whether you're launching a token, tokenizing real-world assets or adding Web3 payments to an existing product, we turn the idea into tested contracts and a clean user experience.",
    capabilities: [
      "Solidity smart contracts",
      "Solana programs in Rust",
      "dApps and wallet integration",
      "Tokenization and digital asset logic",
      "Indexers and on-chain data",
      "Architecture and feasibility consulting",
    ],
    techFocus: ["Solidity", "Rust", "Solana / Anchor", "EVM chains", "Ethers.js / Viem", "Hardhat / Foundry"],
    honestNote: "We test contracts thoroughly, but formal security audits should come from a dedicated audit firm.",
  },
  {
    id: "email",
    title: "Email Infrastructure & Marketing",
    tagline: "Emails that land in the inbox.",
    shortDescription: "Business mailboxes, domain authentication and permission-based campaigns that reach real inboxes.",
    fullDescription:
      "We set up the email foundation your business needs: mailboxes, proper authentication and reliable sending. Then we help you run newsletters and campaigns that people actually signed up for.",
    capabilities: [
      "Business mailbox setup and migrations",
      "SPF, DKIM, DMARC and BIMI",
      "Campaign and newsletter setup",
      "Transactional email through APIs",
      "Bounce and reputation monitoring",
      "List hygiene and unsubscribe handling",
    ],
    techFocus: ["SPF / DKIM / DMARC", "Amazon SES", "Resend / Postmark", "Mailchimp / Brevo", "Webhooks"],
    honestNote: "Permission-based email only. No bought lists, no spam tactics, no inbox guarantees.",
  },
  {
    id: "hosting-care",
    title: "Hosting & Care",
    tagline: "Fast, safe and always up to date.",
    shortDescription: "We host, monitor and maintain your site so you don't have to think about it.",
    fullDescription:
      "Launch is just the start. We keep your site online, secure and quick, fix issues before your customers notice, and make small improvements every month.",
    capabilities: [
      "Managed cloud hosting",
      "SSL, CDN and DNS setup",
      "Uptime and error monitoring",
      "Daily backups",
      "Security and dependency updates",
      "Small monthly improvements",
    ],
    techFocus: ["Cloudflare", "AWS", "Vercel", "Docker", "Linux servers"],
    honestNote: "Care plans cover updates and fixes. Big new features are scoped separately.",
  },
  {
    id: "bots",
    title: "Bot Development",
    tagline: "Voice agents and trading bots, built responsibly.",
    shortDescription: "AI calling agents for sales and support, and trading bots that run your strategy on your own accounts.",
    fullDescription:
      "We build two kinds of bots. AI voice agents handle follow-ups, reminders and lead qualification for people who agreed to hear from you. Trading bots turn your strategy into code that runs on your own exchange or broker account, with risk limits built in.",
    capabilities: [
      "AI voice agents for lead qualification",
      "Appointment reminders and support calls",
      "CRM and dialer integrations",
      "Crypto and stock trading bots",
      "Strategy backtesting and paper trading",
      "Risk limits, alerts and dashboards",
    ],
    techFocus: ["Python", "Go", "Twilio / Vapi", "Exchange APIs", "WebSockets", "PostgreSQL"],
    honestNote:
      "Voice agents only call people who opted in, following PTA and local calling rules. Trading bots run on your accounts; we don't manage funds, give signals or promise returns.",
  },
];
