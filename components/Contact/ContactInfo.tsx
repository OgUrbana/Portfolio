import { PhoneIcon, EmailIcon } from '@/utils';
import SocialLinks from '../SocialLinks';

const ContactInfo = () => {
  return (
    <ul className='flex w-full flex-col gap-10 lg:w-1/3'>
      <li className='flex flex-col gap-6'>
        <p className='base'>My Socials</p>
        <SocialLinks className='flex gap-8' />
      </li>
      <li className='flex flex-col gap-6'>
        <p className='base'>Phone Number</p>
        <div className='base flex items-center gap-2 text-black-400 dark:text-white'>
          <PhoneIcon className='h-4 w-4' />
          <span className='select-all font-semibold'>(240)-220-4816</span>
        </div>
      </li>
      <li className='flex flex-col gap-6'>
        <p className='base'>Email Address</p>
        <div className='base flex items-center gap-2 text-black-400 dark:text-white'>
          <EmailIcon className='h-4 w-4 shrink-0' />
          <span className='select-all font-semibold'>
            matthew.gajo@gmail.com
          </span>
        </div>
      </li>
    </ul>
  );
};

export default ContactInfo;
