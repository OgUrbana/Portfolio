import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-background-1 pb-6 pt-12'>
      <section className='padding-layout'>
        <div className='flex flex-col items-center justify-center gap-2 pt-8 dark:border-t dark:border-t-black-300 md:flex-row md:justify-between'>
          <small>© 2023 Matthew Gajo. All rights reserved.</small>
          <SocialLinks />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
