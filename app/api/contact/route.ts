import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // const data = await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['delivered@resend.dev'],
    //   subject: 'Hello world',
    //   react: EmailTemplate({ firstName: 'John' }),
    // });
    const { data, token } = await request.json();
    const { name, email, project, contact } = data;
    // console.log(name, email, project, contact, token);

    const captchaData = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      },
    );

    const response = await captchaData.json();

    console.log(response);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
