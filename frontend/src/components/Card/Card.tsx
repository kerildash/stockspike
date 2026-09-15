import { Link } from 'react-router-dom';
import type { ICompanySearch } from '../../services/FinancialApiService';
import AddToPortfolio from '../Portfolio/AddToPortfolio/AddToPortfolio';
import React, { type SyntheticEvent } from 'react';
import { IoStatsChartOutline } from 'react-icons/io5';

interface CardProps {
  company : ICompanySearch;
  onAddToPortfolio: (e: SyntheticEvent) => void;
}

const Card: React.FC<CardProps> = ({
  company, 
  onAddToPortfolio: onAddToPortfolio
}: CardProps) => {
  return (
    <div className="bg-white rounded-lg  p-6 border border-gray-200 flex flex-col h-full">
      <div className="flex-1">
        <div className='mb-4 text-center'>
          <Link to={`/company/${company.symbol}`} className="text-xl font-bold text-gray-900 mb-4 cursor-pointer py-2 px-8 rounded-lg duration-200 hover:ring-1 hover:ring-gray-300">{company.symbol}</Link>
        </div>
        
        <div className="space-y-2 text-sm">
          <p className="font-medium text-gray-800">
            {company.name}
          </p>
          <p className="font-medium text-gray-800">
            {`${company.exchange} / ${company.exchangeFullName}`}
          </p>
          <p className="font-medium text-gray-800">
            {company.currency}
          </p>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-300 grid grid-cols-2 gap-3">
        <Link title='View company details' to={`/company/${company.symbol}/company-profile`} className="group flex items-center justify-center border border-gray-300 py-2 px-3 rounded-lg text-sm font-medium text-gray-500 cursor-pointer transition-colors duration-200 hover:border-green-300 hover:bg-green-50 hover:text-gray-900">
          <IoStatsChartOutline className="w-5 h-5 shrink-0 transition-colors duration-200 group-hover:text-green-700" />
        </Link>
        <AddToPortfolio onSubmit={onAddToPortfolio} symbol={company.symbol}/>
      </div>
    </div>
  );
};

export default Card;
