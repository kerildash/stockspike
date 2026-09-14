import type { ChartSeries, IStatementRow } from '../models/Statement';

export const chartColors = [
  '#2563eb',
  '#dc2626',
  '#16a34a',
  '#d97706',
  '#7c3aed',
  '#0891b2',
];

export interface IChartRow {
  date: string;
  [key: string]: string | number | null;
}

export const sortByDateAscending = <T extends IStatementRow>(rows: T[]): T[] =>
  [...rows].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

// Missing values stay null so Recharts draws a gap instead of a drop to zero.
export const buildChartRows = <T extends IStatementRow>(
  rows: T[],
  series: ChartSeries<T>[]
): IChartRow[] =>
  rows.map((row) => {
    const chartRow: IChartRow = { date: row.date };

    series.forEach(({ key }) => {
      const value = row[key];
      chartRow[key] =
        typeof value === 'number' && Number.isFinite(value) ? value : null;
    });

    return chartRow;
  });
