export interface IStatementRow {
  date: string;
}

export type StatementColumn<T> = {
  key: keyof T & string;
  label: string;
  render?: (row: T) => React.ReactNode;
};

export type ChartSeries<T> = {
  key: keyof T & string;
  label: string;
};

export type ChartGroup<T> = {
  id: string;
  title: string;
  series: ChartSeries<T>[];
};

export type StatementViewMode = 'table' | 'charts';
