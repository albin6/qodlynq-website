"use server";

import { appendLeadToSheet } from "@/lib/googleSheets";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Spam protection: check honeypot field
    const honeypot = formData.get("website") as string;
    if (honeypot && honeypot.length > 0) {
      // Silently discard spam
      return { success: true };
    }

    // Extract and normalize values
    const name = (formData.get("name") as string)?.trim() || "";
    const email = (formData.get("email") as string)?.trim() || "";
    const company = (formData.get("company") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const projectType = formData.get("projectType") as string || "";
    const budget = formData.get("budget") as string || "";
    const timeline = formData.get("timeline") as string || "";
    const description = (formData.get("description") as string)?.trim() || "";

    // Server-side validation
    if (!name || !email || !description) {
      return { success: false, error: "Name, email, and description are required." };
    }

    if (name.length > 100 || email.length > 150 || description.length > 5000) {
      return { success: false, error: "Form submission exceeds maximum length limits." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    // Append to Google Sheets
    await appendLeadToSheet({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message: description,
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "We couldn't send your message right now. Please try again or contact us directly." };
  }
}
