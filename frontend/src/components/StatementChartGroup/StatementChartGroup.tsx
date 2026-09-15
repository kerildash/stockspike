import type { ChartGroup, IStatementRow } from '../../models/Statement';
import { FinancialLineChart } from '../FinancialLineChart/FinancialLineChart';

interface IStatementChartGroupProps<T extends IStatementRow> {
  data: T[];
  group: ChartGroup<T>;
}

export const StatementChartGroup = <T extends IStatementRow>({
  data,
  group,
}: IStatementChartGroupProps<T>) => {
  return (
    <section className='p-3 bg-white rounded-lg border border-gray-200'>
      <h3 className='px-2 pb-2 text-sm font-medium text-gray-900 tracking-wide'>
        {group.title}
      </h3>
      <FinancialLineChart data={data} series={group.series} />
    </section>
  );
};
