import React, { type SyntheticEvent } from 'react';
import { IoDuplicateOutline } from 'react-icons/io5';

interface AddToPortfolioProps {
  onSubmit: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddToPortfolio: React.FC<AddToPortfolioProps> = ({
  onSubmit,
  symbol,
}: AddToPortfolioProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className='w-full'
    >
      <input readOnly={true} type='text' hidden={true} value={symbol} />
      <button
        type='submit'
        className='group flex w-full items-center justify-center border border-gray-300 py-2 px-3 rounded-lg text-sm font-medium text-gray-500 cursor-pointer transition-colors duration-200 hover:border-green-300 hover:bg-green-50 hover:text-gray-900'
        title='Add to Portfolio'
      >
        <IoDuplicateOutline className='w-5 h-5 shrink-0 transition-colors duration-200 group-hover:text-green-700' />
      </button>
    </form>
  );
};

export default AddToPortfolio;
