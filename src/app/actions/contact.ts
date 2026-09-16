"use server";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const phone = formData.get("phone") as string;
    const projectType = formData.get("projectType") as string;
    const budget = formData.get("budget") as string;
    const description = formData.get("description") as string;
    const timeline = formData.get("timeline") as string;

    // Server-side validation
    if (!name || !email || !description) {
      return { success: false, error: "Name, email, and description are required." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please provide a valid email address." };
    }

    // Mock sending email or processing enquiry
    // In a production environment, this is where you would integrate with an email provider (e.g., Resend, SendGrid)
    // using process.env.EMAIL_API_KEY and avoiding exposing credentials.
    
    console.log("--- New Project Enquiry ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Company: ${company || "N/A"}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Project Type: ${projectType || "N/A"}`);
    console.log(`Budget: ${budget || "N/A"}`);
    console.log(`Timeline: ${timeline || "N/A"}`);
    console.log(`Description: ${description}`);
    console.log("---------------------------");

    // Simulate network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Something went wrong. Please try again or contact us directly." };
  }
}
