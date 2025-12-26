// app/api/send-lead-sms/route.ts
import { NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      vehicleDetails,
      contactPreferences,
      message,
    } = await request.json();

    const prefText = contactPreferences.length > 0 ? contactPreferences.join(', ') : 'Any';

    const smsBody = `New Lead! 🔥

Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email || 'Not provided'}
Prefs: ${prefText}
Vehicle: ${vehicleDetails || 'Not provided'}

Message:
${message}

Reply ASAP!`;

    await client.messages.create({
      body: smsBody,
      from: process.env.TWILIO_PHONE_NUMBER,  // +19362781319
      to: '+19365294748',                    // Your personal phone (hard-coded for security)
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Twilio SMS error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}