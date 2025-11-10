import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export async function sendEmail({ to, subject, text, html }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Abhishek Shaw" <${process.env.GOOGLE_EMAIL}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return {
      success: true,
      message: "Email sent successfully! We'll contact you soon",
    };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw new Error(
      error.response?.includes("Invalid login")
        ? "Invalid login credentials for Gmail"
        : "Failed to send email"
    );
  }
}
