import { NextResponse } from 'next/server';
import Mailchimp from 'mailchimp-api-v3';

const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    try {
      await mailchimp.post(`/lists/${AUDIENCE_ID}/members`, {
        email_address: email,
        status: 'subscribed',
      });

      return NextResponse.json({ message: "Subscribed successfully!" }, { status: 201 });

    } catch (mailchimpError) {
      if (mailchimpError.response && mailchimpError.response.body) {
        const errorBody = mailchimpError.response.body;

        if (errorBody.title === "Member Exists") {
          return NextResponse.json({ error: "This email is already subscribed." }, { status: 400 });
        }

        return NextResponse.json({ error: errorBody.detail || "An error occurred while subscribing." }, { status: 500 });
      }

      throw mailchimpError;
    }

  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: error.message || error.toString() }, { status: 500 });
  }
}
