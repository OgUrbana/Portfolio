import { ReactNode } from 'react';

export interface emailData {
  name: string;
  email: string;
  project: string;
  contact: string;
}

export interface SettingsType {
  value: string;
  label: string;
  icon: (selected: string, className: string) => ReactNode;
}
