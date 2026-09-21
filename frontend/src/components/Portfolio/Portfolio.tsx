import { useEffect, useId, useState, type FC } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import type { StockResponse } from '../../models/StockResponse';
import { ListPortfolio } from './ListPortfolio/ListPortfolio';
import { WarningPortfolio } from './WarningPortfolio/WarningPortfolio';

interface IPortfolioProps {
  portfolioItems: StockResponse[];
  onDeleteFromPortfolio: (e: any) => void;
  showGuestWarning?: boolean;
}

export const Portfolio: FC<IPortfolioProps> = ({
  portfolioItems,
  onDeleteFromPortfolio,
  showGuestWarning = false,
}) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const shellClassName = [
    'fixed z-40 bg-white',
    open
      ? 'top-[var(--navbar-height)] inset-x-0 bottom-0 flex flex-col'
      : 'top-[var(--navbar-height)] inset-x-0 h-[var(--portfolio-bar-height)]',
    'lg:inset-x-auto lg:top-[var(--navbar-height)] lg:right-0 lg:bottom-auto lg:flex lg:h-[calc(100vh-var(--navbar-height))] lg:w-80 lg:flex-col lg:border-l lg:border-gray-200',
  ].join(' ');

  return (
    <>
      <div
        className='h-[var(--portfolio-bar-height)] shrink-0 lg:hidden'
        aria-hidden
      />

      <aside className={shellClassName}>
        <button
          type='button'
          className='flex h-[var(--portfolio-bar-height)] w-full shrink-0 cursor-pointer items-center justify-between border-b border-gray-200 px-6 text-left hover:bg-gray-50 lg:hidden'
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          <span className='text-lg font-semibold text-gray-900'>
            Portfolio
          </span>
          <IoChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <div className='hidden shrink-0 border-b border-gray-200 px-6 py-3 lg:block'>
          <h2 className='text-2xl font-bold text-gray-900'>Portfolio</h2>
        </div>

        <div
          id={panelId}
          className={`min-h-0 flex-1 flex-col overflow-hidden lg:flex ${open ? 'flex' : 'hidden'}`}
          onClick={(event) => {
            if ((event.target as HTMLElement).closest('a')) {
              setOpen(false);
            }
          }}
        >
          {showGuestWarning && (
            <div className='shrink-0 px-6 pt-4'>
              <WarningPortfolio />
            </div>
          )}
          <div className='flex-1 overflow-y-auto overscroll-contain p-6'>
            <ListPortfolio
              portfolioItems={portfolioItems}
              onDeleteFromPortfolio={onDeleteFromPortfolio}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
