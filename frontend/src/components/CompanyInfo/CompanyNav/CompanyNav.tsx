import { type FC } from 'react';
import { companySectionList } from '../companySections';
import { CompanyNavItem } from './CompanyNavItem';

export const CompanyNav: FC = () => {
  return (
    <nav
      aria-label='Company sections'
      className='sticky top-[var(--navbar-height)] z-40 w-full shrink-0 border-b border-gray-200 bg-white/70 px-2 py-2 backdrop-blur-sm backdrop-saturate-100 md:h-[calc(100vh-var(--navbar-height))] md:w-[var(--company-nav-width)] md:self-start md:overflow-y-auto md:overscroll-contain md:border-r md:border-b-0 md:bg-white md:p-4 md:backdrop-blur-none'
    >
      <ul className='flex list-none flex-row flex-nowrap items-center justify-center gap-4 md:gap-2 md:mt-4 md:flex-col md:items-stretch'>
        {companySectionList.map(({ path, label, icon }) => (
          <li key={path}>
            <CompanyNavItem to={path} label={label} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
