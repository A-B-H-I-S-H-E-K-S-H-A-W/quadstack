import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userEmail, name, topic, html, subject, text } = body;

    if (!userEmail || !name || !html) {
      return NextResponse.json(
        { message: "Missing required fields: userEmail, name, or topic" },
        { status: 400 }
      );
    }

    const result = await sendEmail({
      to: userEmail,
      subject: subject || `Thank you for contacting Quadstack`,
      text:
        text ||
        `Hi ${name}, thanks for reaching out to Quadstack regarding "${topic}". We'll be in touch soon.`,
      html,
    });

    return NextResponse.json(
      {
        success: true,
        message: result.message,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/client route:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}
