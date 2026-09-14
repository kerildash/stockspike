import { type FC } from 'react';
import type { IconType } from 'react-icons';
import {
  IoBusinessOutline,
  IoCashOutline,
  IoReaderOutline,
  IoRepeatOutline,
} from 'react-icons/io5';
import { SidebarItem } from './SidebarItem';

interface ISidebarProps {}

const navItems: { to: string; label: string; icon: IconType }[] = [
  { to: 'company-profile', label: 'Company Profile', icon: IoBusinessOutline },
  { to: 'income-statement', label: 'Income Statement', icon: IoCashOutline },
  { to: 'balance-sheet', label: 'Balance Sheet', icon: IoReaderOutline },
  { to: 'cashflow-statement', label: 'Cashflow Statement', icon: IoRepeatOutline, },
];

export const Sidebar: FC<ISidebarProps> = () => {
  return (
    <nav
      className='absolute top-0 bottom-0 left-0 w-70 py-4 px-6 bg-white border-r-1 border-gray-200 overflow-y-auto overflow-x-hidden md:z-10 z-9999 transform md:translate-x-0 -translate-x-full'
    >
      <ul className='flex flex-col gap-1 mt-4 list-none'>
        {navItems.map(({ to, label, icon }) => (
          <li key={to}>
            <SidebarItem to={to} label={label} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
