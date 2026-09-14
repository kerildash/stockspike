import { type FC } from 'react';
import type { StatementViewMode } from '../../models/Statement';

interface IViewModeToggleProps {
  value: StatementViewMode;
  onChange: (mode: StatementViewMode) => void;
}

const modes: { mode: StatementViewMode; label: string }[] = [
  { mode: 'table', label: '🧾 Table' },
  { mode: 'charts', label: '📈 Charts' },
];

export const ViewModeToggle: FC<IViewModeToggleProps> = ({
  value,
  onChange,
}: IViewModeToggleProps) => {
  return (
    <div className='flex gap-2' role='group' aria-label='Statement view mode'>
      {modes.map(({ mode, label }) => {
        const isActive = value === mode;
        return (
          <button
            key={mode}
            type='button'
            aria-pressed={isActive}
            title={`Show ${mode}`}
            onClick={() => onChange(mode)}
            className={`border font-medium py-2 px-4 rounded cursor-pointer transition-colors duration-200 whitespace-nowrap ${
              isActive
                ? 'border-green-300 bg-green-100 text-gray-900'
                : 'border-gray-200 bg-white text-gray-800 hover:border-green-300 hover:bg-green-50'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
