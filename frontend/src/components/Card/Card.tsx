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
  const exchangeLabel = `${company.exchange} / ${company.exchangeFullName}`;

  return (
    <div className="flex h-full min-w-60 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6">
      <div className="min-w-0 flex-1">
        <div className="mb-4 flex min-w-0 justify-center">
          <Link
            to={`/company/${company.symbol}`}
            title={company.symbol}
            className="flex min-w-0 max-w-full rounded-lg px-4 py-2 text-xl font-bold text-gray-900 duration-200 hover:ring-1 hover:ring-gray-300"
          >
            <span className="min-w-0 truncate">{company.symbol}</span>
          </Link>
        </div>
        
        <div className="min-w-0 space-y-2 text-sm">
          <p className="truncate font-medium text-gray-800" title={company.name}>
            {company.name}
          </p>
          <p className="truncate font-medium text-gray-800" title={exchangeLabel}>
            {exchangeLabel}
          </p>
          <p className="truncate font-medium text-gray-800" title={company.currency}>
            {company.currency}
          </p>
        </div>
      </div>
      <div className="mt-6 grid min-w-0 grid-cols-2 gap-3 border-t border-gray-300 pt-4">
        <Link title='View company details' to={`/company/${company.symbol}/company-profile`} className="group flex min-w-0 items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:border-green-300 hover:bg-green-50 hover:text-gray-900">
          <IoStatsChartOutline className="h-5 w-5 shrink-0 transition-colors duration-200 group-hover:text-green-700" />
        </Link>
        <AddToPortfolio onSubmit={onAddToPortfolio} symbol={company.symbol}/>
      </div>
    </div>
  );
};

export default Card;
