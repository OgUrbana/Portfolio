import {
  JSIcon,
  TSIcon,
  ReactIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  FramerIcon,
  NodeIcon,
  MongoIcon,
  GitIcon,
  MaterialIcon,
  SassIcon,
  HeadlessIcon,
  PSIcon,
  FigmaIcon,
  CCIcon,
  AEIcon,
  GHFilled,
  AsanaIcon,
  DiscordIcon,
} from '@/utils';
import { SkillIcons } from '.';

const devIcons = [
  JSIcon,
  TSIcon,
  ReactIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  FramerIcon,
  NodeIcon,
  MongoIcon,
  GitIcon,
  MaterialIcon,
  SassIcon,
  HeadlessIcon,
];

const designIcons = [PSIcon, FigmaIcon, CCIcon, AEIcon];
const comIcons = [GHFilled, AsanaIcon, DiscordIcon];
const TabIcons = ({ type }: { type: 'dev' | 'design' | 'com' }) => {
  switch (type) {
    case 'dev':
      return <SkillIcons icons={devIcons} />;
    case 'design':
      return <SkillIcons icons={designIcons} />;
    case 'com':
      return <SkillIcons icons={comIcons} />;
    default:
      return <SkillIcons icons={devIcons} />;
  }
};

export default TabIcons;
