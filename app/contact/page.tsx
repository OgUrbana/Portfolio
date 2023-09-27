'use client';

import SocialLinks from '@/components/SocialLinks';
import * as Form from '@radix-ui/react-form';

const contactQuestions = [
  {
    question: "What's your name?",
    type: 'text',
    name: 'name',
  },
  {
    question: "What's your email?",
    type: 'email',
    name: 'email',
  },
  {
    question: 'Write something about your project goals and timeframe',
    type: 'text',
    name: 'project',
  },
  {
    question: 'How to reach out to you back? eg. phone number or email',
    type: 'text',
    name: 'contact',
  },
];

const ContactLayout = () => {
  return (
    <>
      <section className='my-16 flex flex-col items-center bg-background-2'>
        <h1 className='text-secondary'>Get In Touch</h1>
        <p className='font-light text-white-500 dark:text-white'>
          {"Let's Collaborate on Your Next Project"}
        </p>
      </section>
      <section className='bg-background-1'>
        <div className='padding-layout flex justify-between'>
          <div className='w-full md:w-1/3'>
            <div>
              <p className='base'>My Socials</p>
              <SocialLinks />
            </div>
            <div>
              <p className='base'>Phone Number</p>
            </div>
            <div>
              <p className='base'>Email Address</p>
            </div>
          </div>
          <div className='w-full md:w-2/3'>
            <Form.Root className='flex-1 flex-col gap-8'>
              {contactQuestions.map((question) => (
                <Form.FormField
                  key={question.name}
                  className='flex flex-col gap-3 font-light'
                  name={question.name}
                >
                  <Form.Label>{question.question}</Form.Label>
                  <Form.Control asChild>
                    <input
                      className='rounded-xl border border-lightBlue bg-background-2 px-3 py-4 dark:border-black-600'
                      type={question.type}
                    />
                  </Form.Control>
                </Form.FormField>
              ))}
            </Form.Root>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactLayout;
