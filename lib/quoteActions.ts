// lib/quoteActions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteEmail(prevState: any, formData: FormData) {
  const name = formData.get('name')?.toString() || '';
  const phone = formData.get('phone')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const vehicle = formData.get('vehicle')?.toString() || '';
  const vin = formData.get('vin')?.toString() || '';
  const zip = formData.get('zip')?.toString() || '';
  const message = formData.get('message')?.toString() || '';
  const contactPreferences = formData.getAll('contactPreferences') as string[];

  const fileEntries = formData.getAll('files') as File[];
  const attachments = await Promise.all(
    fileEntries
      .filter((f) => f.size > 0)
      .map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
  );

  const prefText = contactPreferences.length > 0 ? contactPreferences.join(', ') : 'Any';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #15803d;">🚗 New Lead from Top Tech Mobile</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Preferred Contact:</strong> ${prefText}</p>
      <p><strong>Vehicle:</strong> ${vehicle}</p>
      <p><strong>VIN (optional):</strong> ${vin || 'Not provided'}</p>
      <p><strong>Service Area / ZIP:</strong> ${zip}</p>
      <p><strong>Message / Shop Quote to Beat:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
      <p><strong>Attachments:</strong> ${attachments.length} file(s) attached</p>
      <hr>
      <p>Call or text ${phone} ASAP — this is a hot lead! 💰</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Top Tech Mobile <onboarding@resend.dev>',
      to: ['david@toptechmobile.com'],
      subject: `🔥 New Quote Request - ${name} ${vehicle ? `(${vehicle})` : ''}`,
      html: htmlContent,
      attachments,
    });

    if (email) {
      await resend.emails.send({
        from: 'Top Tech Mobile <onboarding@resend.dev>',
        to: email,
        subject: "Thanks! I'll beat that shop quote or get you scheduled today",
        html: `<p>Hey ${name},</p><p>David here from Top Tech Mobile. Got your request — I'll review it and beat any shop quote by up to 50% or get you on the calendar same-day if possible.</p><p>Call/text me anytime: <strong>936-529-4748</strong></p><p>Thanks for trusting a local ASE-certified guy!</p>`,
      });
    }

    return { success: true, message: 'Quote sent! David will text/call you shortly 🔥' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Oops — try again or just call 936-529-4748' };
  }
}