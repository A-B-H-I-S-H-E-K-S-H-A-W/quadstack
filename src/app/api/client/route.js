import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userEmail, name, topic, html, subject, text, message } = body;

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

    const googleFormData = {
      name,
      email: userEmail,
      topic,
      message,
    };

    const googleResponse = await axios.post(
      "https://script.google.com/macros/s/AKfycbymfiZ3hoghNN_I8m1terqtoIc7XU9H4oM_f1qir5heG4lpQdrjz74AQo80T_njT9bn/exec",
      googleFormData
    );

    if (googleResponse.status == 200) {
      return NextResponse.json(
        {
          success: true,
          message: result.message,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: true,
          message: result.message || "Email sent, but not recorded!",
        },
        { status: 207 }
      );
    }
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
