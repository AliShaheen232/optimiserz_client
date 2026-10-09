import { InquiryFormData, ValidationErrors } from '../types';

export function validateInquiryForm(data: InquiryFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters long.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.businessEmail.trim()) {
    errors.businessEmail = "Please enter your business email.";
  } else if (!emailRegex.test(data.businessEmail.trim())) {
    errors.businessEmail = "Please provide a valid email address (e.g., name@company.com).";
  }

  if (!data.serviceCategory) {
    errors.serviceCategory = "Please select a service of interest.";
  }

  if (!data.projectDetails.trim()) {
    errors.projectDetails = "Please tell us a little about your project or technical requirements.";
  } else if (data.projectDetails.trim().length < 15) {
    errors.projectDetails = "Please provide at least 15 characters describing what you need.";
  }

  if (!data.consent) {
    errors.consent = "Please confirm that we may use your details to respond to this inquiry.";
  }

  return errors;
}