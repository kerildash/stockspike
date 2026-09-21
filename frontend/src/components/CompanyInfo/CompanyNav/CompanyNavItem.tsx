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
        `group flex min-h-11 min-w-11 items-center justify-center gap-3 rounded-lg border px-3 py-2.5 text-sm font-medium whitespace-nowrap no-underline cursor-pointer transition-colors duration-200 md:min-w-0 md:justify-start ${
          isActive
            ? 'border-green-300 bg-green-100 text-gray-900'
            : 'border-white bg-white text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-gray-900'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
              isActive ? 'text-green-700' : 'text-gray-400 group-hover:text-green-700'
            }`}
          />
          <span className='sr-only md:not-sr-only'>{label}</span>
        </>
      )}
    </NavLink>
  );
};
