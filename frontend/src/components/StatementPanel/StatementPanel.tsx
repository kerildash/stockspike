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
  data: T[];
  columns: StatementColumn<T>[];
  chartGroups: ChartGroup<T>[];
}

export const StatementPanel = <T extends IStatementRow>({
  data,
  columns,
  chartGroups,
}: IStatementPanelProps<T>) => {
  const [viewMode, setViewMode] = useState<StatementViewMode>('table');
  const chartData = useMemo(() => sortByDateAscending(data), [data]);

  return (
    <div className='flex flex-col gap-3'>
      <ViewModeToggle value={viewMode} onChange={setViewMode} />
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
