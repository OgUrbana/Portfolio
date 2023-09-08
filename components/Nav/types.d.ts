import { ReactNode } from 'react';

export interface SettingsType {
  value: string;
  label: string;
  icon: (selected: string, className: string) => ReactNode;
}
