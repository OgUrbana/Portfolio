'use client';

import { FormEvent, useCallback } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import * as Form from '@radix-ui/react-form';

const contactQuestions = [
  {
    question: "What's your name?",
    type: 'text',
    name: 'name',
    invalid: 'Please enter your Full Name',
  },
  {
    question: "What's your email?",
    type: 'email',
    name: 'email',
    invalid: 'Please enter your Email',
    mismatch: 'Please enter a valid Email.',
  },
  {
    question: 'Write something about your project goals and timeframe',
    type: 'text',
    name: 'project',
    invalid: 'Please enter information about your project.',
  },
  {
    question: 'How to reach out to you back?',
    exempli: ' eg. phone number or email',
    type: 'text',
    name: 'contact',
    invalid: 'Let me know how I can reach you.',
  },
];
const ContactForm = () => {
  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      const token = await executeRecaptcha('contact_form');

      fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({ data, token }),
      });
    },
    [executeRecaptcha],
  );

  return (
    <Form.Root className='flex flex-col gap-8' onSubmit={handleSubmit}>
      {contactQuestions.map((question) => (
        <Form.FormField
          key={question.name}
          className='flex flex-col gap-3 font-normal'
          name={question.name}
        >
          <Form.Label className='flex flex-col gap-1 md:flex-row'>
            {question.question}
            <span className='text-black-400'>{question.exempli}</span>
          </Form.Label>
          <Form.Control asChild>
            {question.name !== 'project' ? (
              <input
                className='default-animation rounded-2xl border border-lightBlue bg-background-2 px-3 py-4 outline-none dark:border-black-600'
                type={question.type}
                required
              />
            ) : (
              <textarea
                rows={6}
                className='default-animation rounded-2xl border border-lightBlue bg-background-2 px-3 py-4 outline-none dark:border-black-600'
                required
              />
            )}
          </Form.Control>
          <Form.Message className='flex gap-1 text-error' match='valueMissing'>
            {question.invalid}
          </Form.Message>
          <Form.Message className='flex gap-1 text-error' match='typeMismatch'>
            {question.mismatch}
          </Form.Message>
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
  );
};

export default ContactForm;
