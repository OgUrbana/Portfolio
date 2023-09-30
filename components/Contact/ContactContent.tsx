import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactContent = () => {
  return (
    <section className='bg-background-1 py-16'>
      <div className='padding-layout flex min-h-full flex-col justify-between gap-8 lg:flex-row'>
        <ContactInfo />
        <div className='w-full lg:w-2/3'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
