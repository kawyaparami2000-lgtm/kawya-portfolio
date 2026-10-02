import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting store: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the current window
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many contact requests from this IP. Please wait 10 minutes before trying again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, message, hp_field } = body;

    // 2. Honeypot check (Silent success for bots)
    if (hp_field && typeof hp_field === "string" && hp_field.trim() !== "") {
      return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 200 });
    }

    // 3. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (trimmedName.length < 2 || trimmedName.length > 80) {
      return NextResponse.json(
        { error: "Name must be between 2 and 80 characters long." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 2000) {
      return NextResponse.json(
        { error: "Message must be between 10 and 2000 characters long." },
        { status: 400 }
      );
    }

    // 4. Environment Variables Check
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "Email delivery service is currently unconfigured on the server." },
        { status: 500 }
      );
    }

    // 5. Send Email via Resend (never logging message content)
    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: "Kawya Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: trimmedEmail,
      subject: `New Portfolio Contact Message from ${trimmedName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2>New Portfolio Contact Form Submission</h2>
          <p><strong>Name:</strong> ${trimmedName}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f6fb; padding: 15px; border-radius: 6px;">${trimmedMessage}</p>
        </div>
      `,
    });

    if (sendError) {
      return NextResponse.json(
        { error: "Failed to dispatch email. Please try again or reach out directly via email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been sent successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
