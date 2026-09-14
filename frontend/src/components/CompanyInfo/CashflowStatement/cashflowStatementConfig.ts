import type { StatementLine } from '../../../models/Statement';
import type { ICompanyCashflowStatement } from '../../../services/FinancialApiService';
import {
  buildChartGroups,
  buildStatementColumns,
} from '../../../utils/statementConfig';

const chartGroupDefinitions = [
  { id: 'cash-from-activities', title: 'Cash from Activities' },
  { id: 'cash-generation', title: 'Cash Generation' },
  { id: 'distributions', title: 'Distributions' },
] as const;

type CashflowStatementGroupId = (typeof chartGroupDefinitions)[number]['id'];

const lines: StatementLine<
  ICompanyCashflowStatement,
  CashflowStatementGroupId
>[] = [
  { key: 'date', label: 'Date' },
  { key: 'netIncome', label: 'Net Income', group: 'cash-generation' },
  {
    key: 'netCashProvidedByOperatingActivities',
    label: 'Net Cash From Operating Activities',
    group: 'cash-from-activities',
  },
  {
    key: 'netCashProvidedByInvestingActivities',
    label: 'Net Cash From Investing Activities',
    group: 'cash-from-activities',
  },
  {
    key: 'netDividendsPaid',
    label: 'Net Dividends Paid',
    group: 'distributions',
  },
  {
    key: 'netCashProvidedByFinancingActivities',
    label: 'Net Cash From Financing Activities',
    group: 'cash-from-activities',
  },
  {
    key: 'netChangeInCash',
    label: 'Net Change In Cash',
    group: 'cash-from-activities',
  },
  {
    key: 'operatingCashFlow',
    label: 'Operating Cash Flow',
    group: 'cash-generation',
  },
  {
    key: 'capitalExpenditure',
    label: 'Capital Expenditure',
    group: 'cash-generation',
  },
  { key: 'freeCashFlow', label: 'Free Cash Flow', group: 'cash-generation' },
];

export const cashflowStatementColumns = buildStatementColumns(lines);

export const cashflowStatementChartGroups = buildChartGroups(
  lines,
  chartGroupDefinitions
);
