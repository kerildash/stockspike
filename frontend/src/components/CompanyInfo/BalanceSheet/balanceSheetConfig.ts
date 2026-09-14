import type { StatementLine } from '../../../models/Statement';
import type { ICompanyBalanceSheetStatement } from '../../../services/FinancialApiService';
import {
  buildChartGroups,
  buildStatementColumns,
} from '../../../utils/statementConfig';

const chartGroupDefinitions = [
  { id: 'liquidity', title: 'Liquidity' },
  { id: 'asset-totals', title: 'Asset Totals' },
  { id: 'long-term-assets', title: 'Long-Term Assets' },
  { id: 'liabilities', title: 'Liabilities' },
  { id: 'equity-and-debt', title: 'Equity and Debt' },
] as const;

type BalanceSheetGroupId = (typeof chartGroupDefinitions)[number]['id'];

const lines: StatementLine<
  ICompanyBalanceSheetStatement,
  BalanceSheetGroupId
>[] = [
  { key: 'date', label: 'Date' },
  {
    key: 'cashAndCashEquivalents',
    label: 'Cash and Cash Equivalents',
    group: 'liquidity',
  },
  {
    key: 'shortTermInvestments',
    label: 'Short Term Investments',
    group: 'liquidity',
  },
  { key: 'netReceivables', label: 'Net Receivables', group: 'liquidity' },
  { key: 'inventory', label: 'Inventory', group: 'liquidity' },
  {
    key: 'totalCurrentAssets',
    label: 'Total Current Assets',
    group: 'asset-totals',
  },
  {
    key: 'propertyPlantEquipmentNet',
    label: 'Property Plant Equipment Net',
    group: 'long-term-assets',
  },
  { key: 'goodwill', label: 'Goodwill', group: 'long-term-assets' },
  {
    key: 'intangibleAssets',
    label: 'Intangible Assets',
    group: 'long-term-assets',
  },
  { key: 'totalAssets', label: 'Total Assets', group: 'asset-totals' },
  { key: 'accountPayables', label: 'Account Payables', group: 'liabilities' },
  { key: 'shortTermDebt', label: 'Short Term Debt', group: 'liabilities' },
  {
    key: 'totalCurrentLiabilities',
    label: 'Total Current Liabilities',
    group: 'liabilities',
  },
  { key: 'longTermDebt', label: 'Long Term Debt', group: 'liabilities' },
  { key: 'totalLiabilities', label: 'Total Liabilities', group: 'liabilities' },
  { key: 'commonStock', label: 'Common Stock', group: 'equity-and-debt' },
  {
    key: 'retainedEarnings',
    label: 'Retained Earnings',
    group: 'equity-and-debt',
  },
  {
    key: 'totalStockholdersEquity',
    label: 'Total Stockholders Equity',
    group: 'equity-and-debt',
  },
  { key: 'totalDebt', label: 'Total Debt', group: 'equity-and-debt' },
  { key: 'netDebt', label: 'Net Debt', group: 'equity-and-debt' },
];

export const balanceSheetColumns = buildStatementColumns(lines);

export const balanceSheetChartGroups = buildChartGroups(
  lines,
  chartGroupDefinitions
);
