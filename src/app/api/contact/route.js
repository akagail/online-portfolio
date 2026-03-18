import { Resend } from "resend";

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Please fill out all fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return Response.json(
        {
          ok: false,
          error:
            "Server is missing email configuration (RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}\n`,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

