import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContact } from "@/lib/validateContact";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }
  const to = process.env.CONTACT_TO_EMAIL ?? "info@nucasystems.com";
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!from) {
    return NextResponse.json(
      { ok: false, error: "Email addresses are not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = validateContact(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: 400 }
    );
  }

  const { name, email, company, interest, message } = result.data;
  const interestLabel = interest
    ? {
        ecm: "OpenText ECM Consulting",
        security: "Security & IAM",
        cloud: "Cloud & Infrastructure",
        youtube: "YouTube & Media Services",
        thumbnails: "MakeMyThumb — Thumbnail Design",
        other: "Other / General Enquiry",
      }[interest] ?? interest
    : "(not specified)";

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company ?? "(not provided)"}`,
    `Interest: ${interestLabel}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company ?? "—")}</p>
    <p><strong>Interest:</strong> ${escapeHtml(interestLabel)}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: "New contact from nucasystems.com",
      text,
      html,
    });
    if (error) {
      console.error("[contact] Resend error:", error);
      const err = error as { statusCode?: number; name?: string; message?: string };
      // Resend free/test: only allows sending to your own email until a domain is verified
      if (err.statusCode === 403 && (err.name === "validation_error" || err.message?.includes("testing emails"))) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "Contact form is in test mode. To receive emails from this form, verify your domain at resend.com/domains and use a from address on that domain.",
          },
          { status: 503 }
        );
      }
      return NextResponse.json(
        { ok: false, error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Send exception:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
