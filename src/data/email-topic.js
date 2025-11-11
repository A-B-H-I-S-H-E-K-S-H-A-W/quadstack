export const generateEmailHTML = (topic, name, email, message = "") => {
  switch (topic) {
    case "collaborate":
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">🤝 Collaboration Interest</h2>
          <p>Hi ${name},</p>
          <p>Thank you for expressing interest in collaborating with <strong>Quadstack</strong>. We’re always excited to explore new ideas and partnerships that push boundaries.</p>
          <p>Our team has received your request and will get in touch with you soon to discuss how we can work together effectively.</p>
          ${
            message
              ? `<p><strong>Your message:</strong><br/>"${message}"</p>`
              : ""
          }
          <br/>
          <p>Looking forward to connecting,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;

    case "project-discussion":
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">💬 Project Discussion</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to <strong>Quadstack</strong> to discuss your project. We appreciate your interest and are eager to learn more about your goals.</p>
          <p>Our team has received your details and will contact you soon to explore your requirements in depth.</p>
          ${
            message
              ? `<p><strong>Your message:</strong><br/>"${message}"</p>`
              : ""
          }
          <br/>
          <p>Best regards,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;

    case "hiring":
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">💼 Hiring Inquiry</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out regarding potential hiring or project opportunities with <strong>Quadstack</strong>. We value your interest and are excited to learn more.</p>
          <p>Our team will review your request and reach out soon to discuss your needs in detail.</p>
          ${
            message
              ? `<p><strong>Your message:</strong><br/>"${message}"</p>`
              : ""
          }
          <br/>
          <p>Warm regards,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;

    default:
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">📩 Thank You for Reaching Out</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting <strong>Quadstack</strong>. We’ve received your message and our team will get back to you as soon as possible.</p>
          ${
            message
              ? `<p><strong>Your message:</strong><br/>"${message}"</p>`
              : ""
          }
          <br/>
          <p>Kind regards,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;
  }
};
