import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";
import axios from "axios";

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

    const googleFormData = {
      name,
      email: userEmail,
      topic,
    };

    const googleResponse = await axios.post(
      "https://script.google.com/macros/s/AKfycbwGl466tbhfpEY3i3Q2LXAOtLric0xL5WwdC1Ux_zCkE9QexYquk1J2TUAXNvpAd59T/exec",
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
