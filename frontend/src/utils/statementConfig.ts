import type {
  ChartGroup,
  ChartGroupDefinition,
  StatementColumn,
  StatementLine,
} from '../models/Statement';

export const buildStatementColumns = <T, G extends string>(
  lines: readonly StatementLine<T, G>[]
): StatementColumn<T>[] =>
  lines.map(({ key, label, render }) => ({ key, label, render }));

export const buildChartGroups = <T, G extends string>(
  lines: readonly StatementLine<T, G>[],
  definitions: readonly ChartGroupDefinition<G>[]
): ChartGroup<T>[] =>
  definitions
    .map(({ id, title }) => ({
      id,
      title,
      series: lines
        .filter((line) => line.group === id)
        .map(({ key, label }) => ({ key, label })),
    }))
    .filter(({ series }) => series.length > 0);
