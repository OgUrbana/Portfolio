import { Resend } from 'resend';

import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';
import NotificationEmail from '@/components/Contact/NotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactLayout = () => {
  async function sendEmail(formData: FormData) {
    'use server';

    console.log(formData);
    // const name = formData.get('name') as string;
    // const email = formData.get('email') as string;
    // const project = formData.get('project') as string;
    // const contact = formData.get('contact') as string;

    // if (!name || !email || !project || !contact) return;

    // const data = await resend.emails.send({
    //   from: 'matthew@gajo.dev',
    //   to: [email as string],
    //   subject: `${name} - Wants to get in touch.`,
    //   react: NotificationEmail({ name, email, contact, project }),
    // });

    // console.log(data);
  }

  return (
    <section className='flex h-full flex-1 flex-col bg-background-1'>
      <div className='flex flex-col items-center bg-background-2 py-16'>
        <h1 className='text-secondary'>Get In Touch</h1>
        <p className='font-light text-white-500 dark:text-white'>
          {"Let's Collaborate on Your Next Project"}
        </p>
      </div>
      <div className='bg-background-1 py-16'>
        <div className='padding-layout flex min-h-full flex-col justify-between gap-8 lg:flex-row'>
          <ContactInfo />
          <div className='w-full lg:w-2/3'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLayout;
