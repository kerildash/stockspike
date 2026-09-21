import type { FC } from 'react';
import { Link } from 'react-router';
interface IFooterProps {
  className?: string;
}

export const Footer: FC<IFooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div className='flex min-h-14 w-full flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-gray-200 px-4 py-3 text-sm font-thin text-gray-600'>
        <div className='flex flex-wrap items-center justify-center gap-x-1 gap-y-1'>
          <span className='whitespace-nowrap'>StockSpike — made by</span>
          <span className='whitespace-nowrap'>Kiryl Dashkevich.</span>
          <a
            className='whitespace-nowrap font-bold text-gray-600 hover:underline'
            href='https://linktr.ee/kerildash'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact me!
          </a>
        </div>
        <a
          className='whitespace-nowrap hover:underline'
          href='https://github.com/kerildash/StockSpike'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github repository
        </a>
        <Link className='whitespace-nowrap hover:underline' to='/disclaimer'>
          Disclaimer
        </Link>
      </div>
    </footer>
  );
};
