import { StaticImageData } from 'next/image';

export type Project = 'morrent' | 'jobit';

export type Tech =
  | 'next'
  | 'typescript'
  | 'css'
  | 'react'
  | 'html'
  | 'motion'
  | 'tailwind'
  | 'github'
  | 'git'
  | 'node'
  | 'supabase';

export type Case = {
  name: string;
  preview: StaticImageData;
  hero: {
    title: string;
    tag: string;
    demoLink: string;
    source: string;
  };
  info: {
    role: string;
    start: string;
    end: string;
  };
  tech: Tech[];
  description: string[];
  problem: {
    statement: string;
    problemImage: StaticImageData;
  };
  challenges: string[];
  learnings: string[];
  projects: {
    name: string;
    link: string;
    image: StaticImageData;
    desc: string;
  }[];
};
