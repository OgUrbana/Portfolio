import LineDecoration from '@/public/linedecoration.svg';
import SlackIcon from '@/public/icons/companies/slack.svg';
import FireFoxIcon from '@/public/icons/companies/firefox.svg';
import DigitalOceanIcon from '@/public/icons/companies/digitalocean.svg';
import MailchimpIcon from '@/public/icons/companies/mailchimp.svg';
import Link from 'next/link';

const experience = [
  {
    title: 'Slack',
    desc: 'Product Design - 4 Years Experience',
    icon: SlackIcon,
    link: 'https://slack.com/',
  },
  {
    title: 'Firefox',
    desc: 'Sr. UI Design - 4 Years Experience',
    icon: FireFoxIcon,
    link: 'https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com',
  },
  {
    title: 'Digital Ocean',
    desc: 'UI & Motion Designer - 4 Years Experience',
    icon: DigitalOceanIcon,
    link: 'https://www.digitalocean.com/',
  },
  {
    title: 'Mailchimp',
    desc: 'UI Designer - 4 Years Experience',
    icon: MailchimpIcon,
    link: 'https://mailchimp.com/',
  },
];

const Experience = () => {
  return (
    <section className='padding-layout flex w-full flex-col items-center justify-between gap-8 md:flex-row'>
      <section className='flex w-full flex-col gap-8 rounded-xl bg-black-200 p-16 dark:bg-white-800 md:w-1/2 md:max-w-[450px]'>
        <h2 className='text-3xl text-white dark:text-black'>
          Work <span className='yellow-gradient'>Experience</span>
        </h2>
        <p className='text-sm text-white dark:text-white-500 lg:text-lg'>
          Progress and milestones. A simple walkthrough of roles, projects, and
          achievements in my career
        </p>
        <LineDecoration className='place-self-end fill-white stroke-white stroke-2 dark:stroke-gray-500 sm:w-1/2 md:w-full' />
      </section>
      <section className='w-full'>
        {experience.map((job, index) => (
          <Link key={`job-${index}`} href={job.link}>
            <article className='group flex h-24 items-center gap-8 rounded-xl px-8 transition duration-300 ease-in-out hover:scale-105 hover:bg-background-2 hover:shadow-xl'>
              <job.icon className='h-12 w-12 fill-white transition duration-300 ease-in-out group-hover:fill-primary' />
              <hgroup className=''>
                <h4 className='base-bold group-hover:text-primary'>
                  {job.title}
                </h4>
                <small>{job.desc}</small>
              </hgroup>
            </article>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Experience;
