import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-background-1 pb-6 pt-12'>
      <section className='padding-layout flex flex-col gap-3'>
        <div className='flex flex-col items-center justify-center gap-2 pt-8 dark:border-t dark:border-t-black-300 md:flex-row md:justify-between'>
          <small>© 2023 Matthew Gajo. All rights reserved.</small>
          <SocialLinks />
        </div>
        <p className='text-center text-xs text-black-400 md:text-left'>
          This site is protected by reCAPTCHA and the Google{' '}
          <a href='https://policies.google.com/privacy' className='underline '>
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href='https://policies.google.com/terms' className='underline'>
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
