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

const trimDecimals = (value: number, digits: number) =>
  Number(value.toFixed(digits)).toString();

export const formatCompactNumber = (
  value: number | string | null | undefined
): string => {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return '—';
  }

  const absolute = Math.abs(value);

  if (absolute >= 1e12) return `${trimDecimals(value / 1e12, 1)}T`;
  if (absolute >= 1e9) return `${trimDecimals(value / 1e9, 1)}B`;
  if (absolute >= 1e6) return `${trimDecimals(value / 1e6, 1)}M`;
  if (absolute >= 1e3) return `${trimDecimals(value / 1e3, 1)}K`;

  return trimDecimals(value, 2);
};

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
