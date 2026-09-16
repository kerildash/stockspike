import { type FC } from 'react';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { CardPortfolio } from '../CardPortfolio/CardPortfolio';
import type { StockResponse } from '../../../models/StockResponse';
interface ListPortfolioProps {
  portfolioItems: StockResponse[];
  onDeleteFromPortfolio: (e: any) => void;
}

export const ListPortfolio: FC<ListPortfolioProps> = (
  props: ListPortfolioProps
) => {
  return (
    <div className="space-y-4">
      {props.portfolioItems.length === 0 ? (
        <div className="text-center py-8">
          <div className="flex justify-center text-7xl mb-4 text-gray-400">
            <IoBriefcaseOutline />
          </div>
          <p className="text-gray-500 text-lg font-medium mb-2">Portfolio is empty</p>
          <p className="text-gray-400 text-sm">Add some companies to get started</p>
        </div>
      ) : (
        props.portfolioItems.map((item, index) => (
          <CardPortfolio 
            key={index} 
            portfolioItem={item} 
            onDelete={props.onDeleteFromPortfolio} 
          />
        ))
      )}
    </div>
  );
};
