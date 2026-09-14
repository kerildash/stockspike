import type { StatementLine } from '../../../models/Statement';
import type { ICompanyIncomeStatement } from '../../../services/FinancialApiService';
import {
  buildChartGroups,
  buildStatementColumns,
} from '../../../utils/statementConfig';

const chartGroupDefinitions = [
  { id: 'revenue-and-gross-profit', title: 'Revenue and Gross Profit' },
  { id: 'operating-results', title: 'Operating Results' },
  { id: 'other-income', title: 'Other Income' },
  { id: 'earnings', title: 'Earnings' },
  { id: 'per-share', title: 'Per Share' },
] as const;

type IncomeStatementGroupId = (typeof chartGroupDefinitions)[number]['id'];

const lines: StatementLine<
  ICompanyIncomeStatement,
  IncomeStatementGroupId
>[] = [
  { key: 'date', label: 'Date' },
  {
    key: 'revenue',
    label: 'Revenue',
    group: 'revenue-and-gross-profit',
  },
  {
    key: 'costOfRevenue',
    label: 'Cost Of Revenue',
    group: 'revenue-and-gross-profit',
  },
  {
    key: 'grossProfit',
    label: 'Gross Profit',
    group: 'revenue-and-gross-profit',
  },
  {
    key: 'depreciationAndAmortization',
    label: 'Depreciation & Amortization',
    group: 'operating-results',
  },
  { key: 'ebitda', label: 'EBITDA', group: 'operating-results' },
  { key: 'ebit', label: 'EBIT', group: 'operating-results' },
  {
    key: 'operatingIncome',
    label: 'Operating Income',
    group: 'operating-results',
  },
  {
    key: 'nonOperatingIncomeExcludingInterest',
    label: 'Non-Operating Income',
    group: 'other-income',
  },
  {
    key: 'totalOtherIncomeExpensesNet',
    label: 'Total Other Income/Expenses Net',
    group: 'other-income',
  },
  { key: 'incomeBeforeTax', label: 'Income Before Tax', group: 'earnings' },
  { key: 'incomeTaxExpense', label: 'Income Tax Expense', group: 'earnings' },
  { key: 'netIncome', label: 'Net Income', group: 'earnings' },
  { key: 'eps', label: 'Earnings Per Share', group: 'per-share' },
];

export const incomeStatementColumns = buildStatementColumns(lines);

export const incomeStatementChartGroups = buildChartGroups(
  lines,
  chartGroupDefinitions
);
