import { type FC } from 'react';

interface IBigTileProps {
    title: string;
    info: string
}

export const BigTile: FC<IBigTileProps> = ({title, info}: IBigTileProps) => {
  return (
          <div className='min-w-50 bg-white rounded-lg p-5 border border-gray-200'>
            <h5 className='text-sm font-medium text-gray-800 mb-1'>
              {title}
            </h5>
            <span className='text-3xl font-light break-words'>{info}</span>
          </div>
  );
};