import { type FC } from 'react';
import type { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface ICompanyNavItemProps {
  to: string;
  label: string;
  icon: IconType;
}

export const CompanyNavItem: FC<ICompanyNavItemProps> = ({
  to,
  label,
  icon: Icon,
}: ICompanyNavItemProps) => {
  return (
    <NavLink
      to={to}
      title={label}
      className={({ isActive }) =>
        `group flex size-9 items-center justify-center gap-3 rounded-md border text-sm font-medium whitespace-nowrap no-underline cursor-pointer transition-colors duration-200 md:h-auto md:w-auto md:justify-start md:rounded-lg  md:px-3 md:py-2.5 ${
          isActive
            ? 'border-green-300 bg-green-100 text-gray-900'
            : 'border-transparent bg-transparent text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-gray-900 md:border-white md:bg-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`size-5 shrink-0 transition-colors duration-200 ${
              isActive ? 'text-green-700' : 'text-gray-400 group-hover:text-green-700'
            }`}
          />
          <span className='sr-only md:not-sr-only'>{label}</span>
        </>
      )}
    </NavLink>
  );
};
