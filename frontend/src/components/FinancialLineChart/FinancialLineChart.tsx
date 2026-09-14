import { useMemo, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ChartSeries, IStatementRow } from '../../models/Statement';
import { buildChartRows, chartColors } from '../../utils/financialChart';
import { formatCompactNumber } from '../../utils/formatNumber';

interface IFinancialLineChartProps<T extends IStatementRow> {
  data: T[];
  series: ChartSeries<T>[];
}

export const FinancialLineChart = <T extends IStatementRow>({
  data,
  series,
}: IFinancialLineChartProps<T>) => {
  const [hiddenKeys, setHiddenKeys] = useState<string[]>([]);
  const rows = useMemo(() => buildChartRows(data, series), [data, series]);

  const toggleSeries = (key: string) => {
    setHiddenKeys((previous) => {
      if (previous.includes(key)) {
        return previous.filter((hiddenKey) => hiddenKey !== key);
      }

      if (previous.length >= series.length - 1) {
        return previous;
      }

      return [...previous, key];
    });
  };

  return (
    <div className='h-60 md:h-80'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={rows} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
          <CartesianGrid stroke='#e5e7eb' strokeDasharray='3 3' />
          <XAxis
            dataKey='date'
            tick={{ fontSize: 12, fill: '#4b5563' }}
            stroke='#9ca3af'
          />
          <YAxis
            width={64}
            tickFormatter={(value) => formatCompactNumber(value)}
            tick={{ fontSize: 12, fill: '#4b5563' }}
            stroke='#9ca3af'
          />
          <Tooltip
            isAnimationActive={false}
            formatter={(value) => formatCompactNumber(value as number)}
          />
          <Legend
            itemSorter={null}
            wrapperStyle={{ fontSize: 12, cursor: 'pointer' }}
            onClick={(payload) => toggleSeries(String(payload.dataKey))}
          />
          {series.map(({ key, label }, index) => (
            <Line
              key={key}
              type='linear'
              dataKey={key}
              name={label}
              stroke={chartColors[index % chartColors.length]}
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              hide={hiddenKeys.includes(key)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
