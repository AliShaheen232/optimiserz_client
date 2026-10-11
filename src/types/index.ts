import type { LucideIcon } from "lucide-react";

export type Intent = "validate" | "optimise";

export type ServiceId =
  | "web-apps"
  | "ai-automation"
  | "search-visibility"
  | "blockchain"
  | "email"
  | "hosting-care"
  | "bots";

export interface ServiceItem {
  id: ServiceId;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  techFocus: string[];
  honestNote: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  details: string;
  consent: boolean;
}

export type ValidationErrors = Partial<Record<keyof InquiryFormData, string>>;
