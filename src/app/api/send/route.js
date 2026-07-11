import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, message } = await req.json();

  console.log("API KEY LOADED:", process.env.RESEND_API_KEY ? "yes" : "NO - missing");
  console.log("FROM EMAIL:", fromEmail);

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["anushkasrivastava26405@gmail.com"],
      subject: `New message from ${email}`,
      react: (
        <>
          <h1>New Contact Form Message</h1>
          <p>From: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.log("RESEND ERROR:", JSON.stringify(error, null, 2));
      return Response.json({ error }, { status: 500 });
    }

    console.log("SUCCESS:", data);
    return Response.json(data);
  } catch (error) {
    console.log("CATCH ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}