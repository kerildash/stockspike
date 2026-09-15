import { type FC } from 'react';
import { companySectionList } from '../companySections';
import { SidebarItem } from './SidebarItem';

interface ISidebarProps {}

export const Sidebar: FC<ISidebarProps> = () => {
  return (
    <nav
      aria-label='Company sections'
      className='absolute top-0 bottom-0 left-0 w-70 py-4 px-6 bg-white border-r-1 border-gray-200 overflow-y-auto overflow-x-hidden md:z-10 z-9999 transform md:translate-x-0 -translate-x-full'
    >
      <ul className='flex flex-col gap-1 mt-4 list-none'>
        {companySectionList.map(({ path, label, icon }) => (
          <li key={path}>
            <SidebarItem to={path} label={label} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
