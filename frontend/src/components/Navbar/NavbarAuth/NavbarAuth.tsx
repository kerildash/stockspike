import type { FC } from 'react';
import { useAuth } from '../../../context/useAuth';
import { Link } from 'react-router';
interface INavbarAuthProps {}

const actionButton =
  'inline-flex box-border h-[var(--navbar-control-height)] items-center justify-center whitespace-nowrap rounded-full border px-3 text-sm font-medium leading-none transition-colors duration-200';

export const NavbarAuth: FC<INavbarAuthProps> = () => {
  const { user, isLoggedIn, logOut } = useAuth();
  const username = user?.userName;

  if (isLoggedIn()) {
    return (
      <div className='flex h-[var(--navbar-control-height)] shrink-0 flex-nowrap items-center gap-3'>
        <div className='hidden text-sm leading-none text-slate-800 font-medium whitespace-nowrap sm:block'>
          {username}
        </div>
        <button
          onClick={logOut}
          className={`${actionButton} cursor-pointer border-transparent bg-slate-800 text-white hover:bg-slate-700`}
        >
            Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className='flex h-[var(--navbar-control-height)] shrink-0 flex-nowrap items-center gap-2'>
      <Link
        to='/signup'
        className={`${actionButton} hidden border-gray-200 text-slate-800 hover:bg-slate-100 sm:inline-flex`}
      >
        Sign Up
      </Link>
      <Link
        to='/login'
        className={`${actionButton} border-transparent bg-blue-800 text-white hover:bg-blue-900`}
      >
        Log In
      </Link>
    </div>
  );
};
