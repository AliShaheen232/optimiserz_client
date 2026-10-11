import type { InquiryFormData, ValidationErrors } from "../types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryForm(data: InquiryFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (data.fullName.trim().length < 2) errors.fullName = "Please enter your name.";
  if (!emailPattern.test(data.email.trim())) errors.email = "Please enter a valid email.";
  if (!data.service) errors.service = "Please pick a service.";
  if (data.details.trim().length < 15) errors.details = "A couple of sentences is enough.";
  if (!data.consent) errors.consent = "Please confirm we can reply to you.";

  return errors;
}
