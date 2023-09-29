import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';

const ContactLayout = () => {
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
