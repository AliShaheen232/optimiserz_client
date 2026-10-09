export type ServiceId = 
  | 'web-development' 
  | 'blockchain-development' 
  | 'artificial-intelligence' 
  | 'agentic-ai' 
  | 'mailbox-bulk-email';

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

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export interface InquiryFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceCategory: string;
  estimatedBudget: string;
  projectDetails: string;
  consent: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  businessEmail?: string;
  serviceCategory?: string;
  projectDetails?: string;
  consent?: string;
}