import { z } from "zod";

const interestValues = [
  "ecm",
  "security",
  "cloud",
  "youtube",
  "thumbnails",
  "other",
] as const;

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Please enter a valid email"),
  company: z.string().max(200).optional(),
  interest: z.union([z.enum(interestValues), z.literal("")]).optional(),
  message: z.string().min(1, "Message is required").max(5000),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function validateContact(data: unknown): {
  success: true;
  data: ContactFormData;
} | {
  success: false;
  error: string;
} {
  const parsed = contactSchema.safeParse(data);
  if (parsed.success) {
    const d = parsed.data;
    if (d.website && d.website.length > 0) {
      return { success: false, error: "Invalid submission." };
    }
    return {
      success: true,
      data: {
        name: d.name,
        email: d.email,
        company: d.company || undefined,
        interest: d.interest === "" ? undefined : d.interest,
        message: d.message,
      },
    };
  }
  const first = parsed.error.flatten().fieldErrors;
  const msg =
    first.name?.[0] ??
    first.email?.[0] ??
    first.message?.[0] ??
    "Please check your entries.";
  return { success: false, error: msg };
}
