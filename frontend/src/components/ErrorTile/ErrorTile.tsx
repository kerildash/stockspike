import { type ComponentType, type FC } from 'react';
import { IoWarningOutline } from 'react-icons/io5';

interface IErrorTileProps {
  message: string;
  className?: string;
  children?: React.ReactNode;
  icon?: ComponentType<{ className?: string }>;
  isWarning?: boolean;
}

export const ErrorTile: FC<IErrorTileProps> = ({
  message,
  className,
  children,
  icon,
  isWarning = false,
}: IErrorTileProps) => {
  const Icon = icon ?? (isWarning ? IoWarningOutline : undefined);
  return (
    <div
      className={`bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center ${className}`}
    >
      {Icon && (
        <div className='flex justify-center text-6xl mb-4 text-yellow-700'>
          <Icon />
        </div>
      )}
      <p className='text-yellow-700 font-medium text-lg'>{message}</p>
      {children}
    </div>
  );
};
