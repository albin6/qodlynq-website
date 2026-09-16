import { google } from "googleapis";

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

function cleanEnvVar(val: string | undefined): string | undefined {
  if (!val) return undefined;
  let cleaned = val.trim();
  if (
    (cleaned.startsWith('"') && cleaned.endsWith('"')) ||
    (cleaned.startsWith("'") && cleaned.endsWith("'"))
  ) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  return cleaned;
}

export async function appendLeadToSheet(data: LeadData): Promise<void> {
  const spreadsheetId = cleanEnvVar(process.env.GOOGLE_SHEETS_SPREADSHEET_ID);
  const clientEmail = cleanEnvVar(process.env.GOOGLE_SHEETS_CLIENT_EMAIL);
  let privateKey = cleanEnvVar(process.env.GOOGLE_SHEETS_PRIVATE_KEY);
  if (privateKey) {
    // Safely handle newlines in the private key when loaded from environment variables
    privateKey = privateKey.replace(/\\n/g, "\n");
  }

  if (!spreadsheetId || !clientEmail || !privateKey) {
    const missing: string[] = [];
    if (!spreadsheetId) missing.push("GOOGLE_SHEETS_SPREADSHEET_ID");
    if (!clientEmail) missing.push("GOOGLE_SHEETS_CLIENT_EMAIL");
    if (!privateKey) missing.push("GOOGLE_SHEETS_PRIVATE_KEY");
    console.error(`Missing Google Sheets environment variables: ${missing.join(", ")}`);
    throw new Error(`Server misconfiguration: missing environment variables (${missing.join(", ")})`);
  }

  // Create Google Auth Client
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Generate Timestamp for Asia/Kolkata timezone
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  
  // Format: YYYY-MM-DD HH:mm:ss
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  const parts = formatter.formatToParts(now);
  const dateObj: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      dateObj[part.type] = part.value;
    }
  }
  const timestamp = `${dateObj.year}-${dateObj.month}-${dateObj.day} ${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;

  const status = "New";
  const source = "Website Contact Form";

  // Data to append: Timestamp | Name | Email | Phone | Company | Project Type | Budget | Timeline | Message | Status | Source
  const row = [
    timestamp,
    data.name,
    data.email,
    data.phone || "",
    data.company || "",
    data.projectType || "",
    data.budget || "",
    data.timeline || "",
    data.message,
    status,
    source,
  ];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:K",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });
  } catch (error) {
    console.error("Failed to append row to Google Sheets", error);
    throw new Error("Failed to append lead");
  }
}
