import {
  MessagesSquare,
  ClipboardList,
  Hammer,
  TrendingUp,
  Sprout,
  Handshake,
  KeyRound,
} from "lucide-react";
import type { Feature, Intent } from "../types";
import { servicesData } from "./services";

export const paths = {
  validate: {
    eyebrow: "I have an idea",
    title: "Prove it before you spend big.",
    points: [
      "Quick market and competitor check",
      "A clickable prototype to show real people",
      "A lean MVP that tests what matters",
    ],
    cta: "Validate my idea",
  },
  optimise: {
    eyebrow: "I run a business",
    title: "Cut the busywork. Reach more customers.",
    points: [
      "Spot the slow, manual tasks",
      "Automate them with AI and simple tools",
      "A faster website that gets found",
    ],
    cta: "Improve my business",
  },
};

export const steps: Feature[] = [
  { icon: MessagesSquare, title: "Talk", text: "A short call about your goal." },
  { icon: ClipboardList, title: "Plan", text: "Clear scope, timeline and price." },
  { icon: Hammer, title: "Build", text: "Small releases you can see and test." },
  { icon: TrendingUp, title: "Grow", text: "We measure, improve and support." },
];

export const reasons: Feature[] = [
  { icon: Sprout, title: "Start small", text: "We build the smallest version that proves the point." },
  { icon: Handshake, title: "Plain talk", text: "No jargon. You always know where things stand." },
  { icon: KeyRound, title: "You own it", text: "Code, accounts and data stay yours." },
];

export const serviceOptions = [
  "Validate a startup idea",
  "Improve business efficiency",
  ...servicesData.map((s) => s.title),
  "Other",
];

export const intentToService: Record<Intent, string> = {
  validate: "Validate a startup idea",
  optimise: "Improve business efficiency",
};

export const heroChips = ["Web & Apps", "AI & Automation", "SEO & GEO", "Blockchain", "Bots"];

export const coreLayers = [
  { key: "product", title: "Product Layer", stack: "Go · Python · Node.js · React · Next.js", tag: "Web apps" },
  { key: "data", title: "Data & Search", stack: "PostgreSQL · Elasticsearch · Redis", tag: "Data" },
  { key: "agentic", title: "Agentic Orchestration", stack: "LLM Tools · RAG · Workflows", tag: "Automation" },
  { key: "web3", title: "Decentralized Protocol", stack: "Rust · Solana · Solidity · EVM", tag: "Web3" },
  { key: "delivery", title: "Delivery Pipeline", stack: "SPF · DKIM · DMARC · SMTP", tag: "Email infra" },
] as const;
