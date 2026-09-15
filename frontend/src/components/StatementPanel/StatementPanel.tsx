import { useMemo, useState } from 'react';
import type {
  ChartGroup,
  IStatementRow,
  StatementColumn,
  StatementViewMode,
} from '../../models/Statement';
import { sortByDateAscending } from '../../utils/financialChart';
import { StatementChartGroup } from '../StatementChartGroup/StatementChartGroup';
import { Table } from '../Table/Table';
import { ViewModeToggle } from '../ViewModeToggle/ViewModeToggle';

interface IStatementPanelProps<T extends IStatementRow> {
  title: string;
  data: T[];
  columns: StatementColumn<T>[];
  chartGroups: ChartGroup<T>[];
}

export const StatementPanel = <T extends IStatementRow>({
  title,
  data,
  columns,
  chartGroups,
}: IStatementPanelProps<T>) => {
  const [viewMode, setViewMode] = useState<StatementViewMode>('charts');
  const chartData = useMemo(() => sortByDateAscending(data), [data]);

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-4'>
        <h2 className='text-2xl text-gray-900'>{title}</h2>
        <ViewModeToggle value={viewMode} onChange={setViewMode} />
      </div>
      {viewMode === 'table' ? (
        <Table data={data} config={columns} />
      ) : (
        <div className='flex flex-col gap-3'>
          {chartGroups.map((group) => (
            <StatementChartGroup key={group.id} data={chartData} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};
