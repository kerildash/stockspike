import { type FC } from 'react';
import type { IconType } from 'react-icons';
import { HiOutlineTableCells } from 'react-icons/hi2';
import { IoAnalyticsOutline } from 'react-icons/io5';
import type { StatementViewMode } from '../../models/Statement';

interface IViewModeToggleProps {
  value: StatementViewMode;
  onChange: (mode: StatementViewMode) => void;
}

const modes: { mode: StatementViewMode; label: string; icon: IconType }[] = [
  { mode: 'table', label: 'Table', icon: HiOutlineTableCells },
  { mode: 'charts', label: 'Charts', icon: IoAnalyticsOutline },
];

export const ViewModeToggle: FC<IViewModeToggleProps> = ({
  value,
  onChange,
}: IViewModeToggleProps) => {
  return (
    <div className='flex gap-2' role='group' aria-label='Statement view mode'>
      {modes.map(({ mode, label, icon: Icon }) => {
        const isActive = value === mode;
        return (
          <button
            key={mode}
            type='button'
            aria-pressed={isActive}
            title={`Show ${mode}`}
            onClick={() => onChange(mode)}
            className={`group flex items-center gap-3 border py-2 px-3 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
              isActive
                ? 'border-green-300 bg-green-100 text-gray-900'
                : 'border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:bg-green-50 hover:text-gray-900'
            }`}
          >
            <Icon
              className={`w-5 h-5 shrink-0 transition-colors duration-200 ${
                isActive ? 'text-green-700' : 'text-gray-400 group-hover:text-green-700'
              }`}
            />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
