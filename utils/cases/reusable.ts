import {
  CSSIcon,
  DefIcon,
  DefLightIcon,
  DeployIcon,
  DeployLightIcon,
  DesignIcon,
  DesignLightIcon,
  DevIcon,
  DevLightIcon,
  GitIcon,
  GithubTechIcon,
  HTMLIcon,
  MotionIcon,
  NextIcon,
  NodeIcon,
  PlanIcon,
  PlanLightIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
} from '..';

export const workProcess = [
  {
    lightIcon: DefLightIcon,
    darkIcon: DefIcon,
    name: 'Definition',
    alt: 'Definition Icon',
  },
  {
    lightIcon: DesignLightIcon,
    darkIcon: DesignIcon,
    name: 'Design',
    alt: 'Design Icon',
  },
  {
    lightIcon: PlanLightIcon,
    darkIcon: PlanIcon,
    name: 'Planning',
    alt: 'Planning Icon',
  },
  {
    lightIcon: DevLightIcon,
    darkIcon: DevIcon,
    name: 'Development',
    alt: 'Development Icon',
  },
  {
    lightIcon: DeployLightIcon,
    darkIcon: DeployIcon,
    name: 'Deployment',
    alt: 'Deployment Icon',
  },
];

export const techDefs = [
  { name: 'next', icon: NextIcon, link: 'https://www.nextjs.org' },
  {
    name: 'typescript',
    icon: TypeScriptIcon,
    link: 'https://www.typescriptlang.org',
  },
  { name: 'css', icon: CSSIcon, link: 'https://www.w3schools.com/css/' },
  { name: 'react', icon: ReactIcon, link: 'https://www.react.dev/' },
  { name: 'html', icon: HTMLIcon, link: 'https://www.w3schools.com/html/' },
  { name: 'motion', icon: MotionIcon, link: 'https://www.framer.com/motion/' },
  { name: 'tailwind', icon: TailwindIcon, link: 'https://tailwindcss.com/' },
  { name: 'github', icon: GithubTechIcon, link: 'https://github.com/OgUrbana' },
  { name: 'git', icon: GitIcon, link: 'https://git-scm.com/' },
  { name: 'node', icon: NodeIcon, link: 'https://nodejs.org/en' },
  { name: 'supabase', icon: SupabaseIcon, link: 'https://supabase.com/' },
];
