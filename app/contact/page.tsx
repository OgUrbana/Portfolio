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
    question: 'How to reach out to you back?',
    exempli: ' eg. phone number or email',
    type: 'text',
    name: 'contact',
  },
];

const ContactLayout = () => {
  return (
    <div className='flex h-full flex-1 flex-col bg-background-1'>
      <section className='flex flex-col items-center bg-background-2 py-16'>
        <h1 className='text-secondary'>Get In Touch</h1>
        <p className='font-light text-white-500 dark:text-white'>
          {"Let's Collaborate on Your Next Project"}
        </p>
      </section>
      <section className='bg-background-1 py-16'>
        <div className='padding-layout flex min-h-full flex-col justify-between md:flex-row'>
          <div className='flex w-full flex-col gap-10 md:w-1/3'>
            <div className='flex flex-col gap-6'>
              <p className='base'>My Socials</p>
              <SocialLinks className='flex gap-8' />
            </div>
            <div className='flex flex-col gap-6'>
              <p className='base'>Phone Number</p>
            </div>
            <div className='flex flex-col gap-6'>
              <p className='base'>Email Address</p>
            </div>
          </div>
          <div className='w-full md:w-2/3'>
            <Form.Root className='flex flex-col gap-8'>
              {contactQuestions.map((question) => (
                <Form.FormField
                  key={question.name}
                  className='flex flex-col gap-3 font-light'
                  name={question.name}
                >
                  <Form.Label className='flex gap-1'>
                    {question.question}
                    <span className='text-black-400'>{question.exempli}</span>
                  </Form.Label>
                  <Form.Control asChild>
                    {question.name !== 'project' ? (
                      <input
                        className='default-animation rounded-2xl border border-lightBlue bg-background-2 px-3 py-4 outline-none dark:border-black-600'
                        type='text'
                      />
                    ) : (
                      <textarea
                        rows={6}
                        className='default-animation rounded-2xl border border-lightBlue bg-background-2 px-3 py-4 outline-none dark:border-black-600'
                      />
                    )}
                  </Form.Control>
                </Form.FormField>
              ))}
              <Form.Submit asChild>
                <div className='flex justify-end'>
                  <button className='default-animation rounded-full bg-primary px-12 py-3 hover:bg-primary/70'>
                    Send
                  </button>
                </div>
              </Form.Submit>
            </Form.Root>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLayout;
