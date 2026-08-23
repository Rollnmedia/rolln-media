import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = body;

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "Roll'n Media <hello@rolln.media>",
      to: ["hello@rolln.media"],
      replyTo: email,
      subject: `New Enquiry — ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #111;">

          <h2 style="margin-bottom: 30px;">
            New Roll'n Media Enquiry
          </h2>

          <p>
            <strong>Name:</strong><br />
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>Mobile:</strong><br />
            ${escapeHtml(phone)}
          </p>

          <p>
            <strong>Company / Website:</strong><br />
            ${escapeHtml(company || "Not provided")}
          </p>

          <p>
            <strong>Service:</strong><br />
            ${escapeHtml(service)}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </p>

        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          error: "Unable to send your enquiry.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
