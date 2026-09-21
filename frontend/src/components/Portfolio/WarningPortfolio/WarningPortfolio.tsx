import { useState, type FC } from 'react';
import { IoCloseOutline, IoWarningOutline } from 'react-icons/io5';
import { Link } from 'react-router';

interface IWarningPortfolioProps {}

export const WarningPortfolio: FC<IWarningPortfolioProps> = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className='relative bg-yellow-50 rounded-lg border border-yellow-500 px-4 py-2 pr-10 flex items-center gap-4 justify-between'>
      <button
        type='button' //text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors duration-200
        className='absolute right-2 rounded-full p-1 text-amber-600/80 hover:bg-amber-100 hover:text-amber-800 transition-colors duration-200 ease-in-out cursor-pointer'
        onClick={() => setDismissed(true)}
        aria-label='Dismiss warning'
      >
        <IoCloseOutline className='w-4 h-4' />
      </button>

      <span className='text-amber-600 shrink-0' aria-hidden>
        <IoWarningOutline className='w-5 h-5' />
      </span>

      <p className='text-xs text-amber-600'>
        You may lose your portfolio. Please <span  className="font-bold hover:underline"><Link to="/signup">sign up</Link></span> to save it
      </p>
    </div>
  );
};
