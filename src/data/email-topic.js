export const generateEmailHTML = (topic, name, email) => {
  switch (topic) {
    case "collaborate":
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">🤝 Let's Collaborate!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for showing interest in collaborating with <strong>Quadstack</strong>. We're always open to working with passionate individuals and teams on innovative projects.</p>
          <p>Our team will review your request and get in touch soon to explore how we can create something impactful together.</p>
          <p>We’re excited about the possibilities ahead!</p>
          <br/>
          <p>Best regards,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;

    case "project-discussion":
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">💬 Project Discussion</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to <strong>Quadstack</strong> to discuss your project details. We’re eager to learn more about your vision, timeline, and goals so that we can provide the best technical and creative solutions.</p>
          <p>Our team will contact you soon to schedule a detailed conversation and plan the next steps.</p>
          <p>We look forward to building something amazing together.</p>
          <br/>
          <p>Warm regards,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;

    case "hiring":
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">💼 Hiring Inquiry</h2>
          <p>Hi ${name},</p>
          <p>Thank you for considering <strong>Quadstack</strong> for your project or hiring needs. Our experienced team is ready to deliver top-notch solutions tailored to your goals.</p>
          <p>We’ll reach out shortly to discuss the project scope, requirements, and next steps.</p>
          <p>We appreciate your trust in our work.</p>
          <br/>
          <p>Sincerely,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;

    default:
      return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; padding: 20px; border-radius: 10px; background-color: #f9fafb;">
          <h2 style="color:#2563eb;">📩 Thank You for Reaching Out</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting <strong>Quadstack</strong>. Our team has received your message and will get back to you shortly.</p>
          <p>If this is urgent, please reply to this email or visit our website for direct support.</p>
          <br/>
          <p>Kind regards,<br/><strong>The Quadstack Team</strong><br/>www.quadstack.com</p>
        </div>
      `;
  }
};
