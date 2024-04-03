import {
  AllMight,
  AnalyticsIcon,
  HarvardIcon,
  JSMIcon,
  MonitorIcon,
  OptimizeIcon,
  PlaceholderUser,
  ServerIcon,
  StudentEmoji,
} from '..';

export const reviews = [
  {
    name: 'All Might',
    image: AllMight,
    title: 'Teacher at U.A & Number 1 Hero',
    rating: 5,
    review:
      'It was a pleasure working with Matthew as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in many modern languages and framerworks. He is very hard working and always goes beyond PLUS ULTRA!',
  },
  {
    name: '- Mom',
    image: PlaceholderUser,
    rating: 5,
    title: 'My Wonderful Mom',
    review:
      'Very handsome, very nice and very respectable. Always babysits when we asks him. Smartest in the world! He always helps around the house and always fixes everything that breaks. He is an IT genius!',
  },
];

export const services = [
  {
    title: 'Analytics & SEO',
    desc: 'Implement tracking & analytics tools to monitor website performance & improve SEO.',
    icon: AnalyticsIcon,
  },
  {
    title: 'Front-End Dev',
    desc: 'Front-end dev includes creating the user interface and interactive elements of websites and apps.',
    icon: MonitorIcon,
  },
  {
    title: 'Back-End Dev',
    desc: 'Back-end dev includes managing API, integrate elements, and managing data.',
    icon: ServerIcon,
  },
  {
    title: 'Web Optimization',
    desc: 'Web optimization focuses on improving website performance for a smoother user experience',
    icon: OptimizeIcon,
  },
];

export const experience = [
  {
    title: 'JSM Master Class',
    desc: 'Full Stack Web Development Bootcamp - 6 Months',
    icon: JSMIcon,
    link: 'https://www.jsmastery.pro/',
  },
  {
    title: 'HarvardX',
    desc: 'Programming & Computer Science',
    icon: HarvardIcon,
    link: 'https://www.edx.org/school/harvardx',
  },
  {
    title: 'Self Study',
    desc: 'Full Stack Development and Design Principals 4 Years',
    icon: StudentEmoji,
    link: 'https://www.digitalocean.com/',
  },
];
