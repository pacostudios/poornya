import nodemailer from "nodemailer";

// ✅ create transporter ONCE
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@poornaya.com",
    pass: "Poornaya@123",
  },
});

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 🚀 send mail WITHOUT await
    transporter.sendMail({
      from: process.env.EMAIL_USER || "info@poornaya.com",
      replyTo: email,
      to: process.env.EMAIL_USER || "info@poornaya.com",
      subject: "New Contact Form Message",
      html: `
        <h3>Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    }).catch((err) => {
      console.error("MAIL FAILED:", err);
    });

    // ⚡ instant response
    return Response.json({ success: true });

  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}