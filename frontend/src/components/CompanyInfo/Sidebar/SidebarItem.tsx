import { type FC } from 'react';
import type { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

interface ISidebarItemProps {
  to: string;
  label: string;
  icon: IconType;
}

export const SidebarItem: FC<ISidebarItemProps> = ({
  to,
  label,
  icon: Icon,
}: ISidebarItemProps) => {
  return (
    <NavLink
      to={to}
      title={label}
      className={({ isActive }) =>
        `group flex items-center gap-3 border py-2.5 px-3 rounded-lg text-sm font-medium whitespace-nowrap no-underline cursor-pointer transition-colors duration-200 ${
          isActive
            ? 'border-green-300 bg-green-100 text-gray-900'
            : 'border-white bg-white text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-gray-900'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
              isActive ? 'text-green-700' : 'text-gray-400 group-hover:text-green-700'
            }`}
          />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  );
};
