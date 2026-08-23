import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate form fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        {
          error: "Please fill in all fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Send enquiry email
    const { data, error } = await resend.emails.send({
      from: "Roll’n Media Website <hello@rolln.media>",
      to: ["hello@rolln.media"],
      replyTo: email,
      subject: `New Website Enquiry — ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New Website Enquiry</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f4f4f4;
              font-family: Arial, Helvetica, sans-serif;
              color: #111111;
            "
          >

            <div
              style="
                max-width: 650px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e5e5e5;
              "
            >

              <!-- Header -->
              <div
                style="
                  background: #111111;
                  padding: 30px;
                  color: #ffffff;
                "
              >
                <h1
                  style="
                    margin: 0 0 8px;
                    font-size: 24px;
                  "
                >
                  New Website Enquiry
                </h1>

                <p
                  style="
                    margin: 0;
                    color: #aaaaaa;
                    font-size: 14px;
                  "
                >
                  Roll’n Media Website
                </p>
              </div>

              <!-- Content -->
              <div style="padding: 30px;">

                <div style="margin-bottom: 22px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      font-weight: bold;
                      color: #777777;
                      letter-spacing: 1px;
                    "
                  >
                    NAME
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                    "
                  >
                    ${name}
                  </p>
                </div>


                <div style="margin-bottom: 22px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      font-weight: bold;
                      color: #777777;
                      letter-spacing: 1px;
                    "
                  >
                    EMAIL
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                    "
                  >
                    ${email}
                  </p>
                </div>


                <div style="margin-bottom: 22px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      font-weight: bold;
                      color: #777777;
                      letter-spacing: 1px;
                    "
                  >
                    MOBILE NUMBER
                  </p>

                  <p
                    style="
                      margin: 0;
                      font-size: 16px;
                    "
                  >
                    ${phone}
                  </p>
                </div>


                <div style="margin-bottom: 10px;">
                  <p
                    style="
                      margin: 0 0 6px;
                      font-size: 12px;
                      font-weight: bold;
                      color: #777777;
                      letter-spacing: 1px;
                    "
                  >
                    MESSAGE
                  </p>

                  <div
                    style="
                      background: #f7f7f7;
                      padding: 18px;
                      border-radius: 8px;
                      font-size: 15px;
                      line-height: 1.6;
                    "
                  >
                    ${message}
                  </div>
                </div>

              </div>

              <!-- Footer -->
              <div
                style="
                  padding: 20px 30px;
                  border-top: 1px solid #eeeeee;
                  color: #888888;
                  font-size: 12px;
                "
              >
                This enquiry was submitted through rolln.media
              </div>

            </div>

          </body>
        </html>
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Email could not be sent.",
          details: error.message,
        },
        {
          status: 500,
        }
      );
    }

    console.log("Email sent successfully:", data);

    return Response.json(
      {
        success: true,
        message: "Enquiry sent successfully.",
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}
