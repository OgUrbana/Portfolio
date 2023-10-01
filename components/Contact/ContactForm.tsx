'use client';

import { FormEvent, useCallback, useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import * as Form from '@radix-ui/react-form';

import { contactQuestions } from '@/utils';

const ContactForm = () => {
  const [disabled, setDisabled] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget));
      const token = await executeRecaptcha('contact_form');

      const response = await fetch(`/api/contact`, {
        method: 'POST',
        body: JSON.stringify({ data, token }),
      });

      const emailResponse = await response.json();

      if (emailResponse.success) setDisabled(true);
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
                className='default-animation rounded-2xl border border-lightBlue bg-background-2 px-3 py-4 outline-none disabled:bg-background-2/40 disabled:text-black-400 dark:border-black-600'
                type={question.type}
                required
                disabled={disabled}
                autoComplete={question.type}
              />
            ) : (
              <textarea
                rows={6}
                className='default-animation rounded-2xl border border-lightBlue bg-background-2 px-3 py-4 outline-none disabled:bg-background-2/40 disabled:text-black-400 dark:border-black-600'
                required
                disabled={disabled}
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
          <button
            className='default-animation w-full rounded-full bg-primary px-12 py-3 text-white hover:bg-primary/70 disabled:bg-primary/40 disabled:text-black-400 lg:w-fit'
            disabled={disabled}
          >
            Send
          </button>
        </div>
      </Form.Submit>
    </Form.Root>
  );
};

export default ContactForm;
