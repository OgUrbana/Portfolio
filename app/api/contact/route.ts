import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { ConfirmationEmail, NotificationEmail } from '@/components';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { data, token } = await request.json();
    const { name, email, project, contact } = data;

    // Verifying user with RECaptcha v3
    const captchaData = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      },
    );

    // Captcha Response
    const response = await captchaData.json();

    // True = Real User, False = Bot / Error
    if (response.success) {
      await resend.emails.send({
        from: 'noreply@gajo.dev',
        to: ['matthew.gajo@gmail.com'],
        subject: `${name} - Wants to get in touch.`,
        react: NotificationEmail({ name, email, contact, project }),
      });

      await resend.emails.send({
        from: 'noreply@gajo.dev',
        to: [email as string],
        subject: 'Confirmation Email - Matthew Gajo',
        react: ConfirmationEmail({ name }),
      });
    }

    return NextResponse.json({ status: 200, success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
