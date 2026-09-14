import type { ChartGroup, StatementColumn } from '../../../models/Statement';
import type { ICompanyBalanceSheetStatement } from '../../../services/FinancialApiService';

export const balanceSheetColumns: StatementColumn<ICompanyBalanceSheetStatement>[] =
  [
    { key: 'date', label: 'Date' },
    { key: 'cashAndCashEquivalents', label: 'Cash and Cash Equivalents' },
    { key: 'shortTermInvestments', label: 'Short Term Investments' },
    { key: 'netReceivables', label: 'Net Receivables' },
    { key: 'inventory', label: 'Inventory' },
    { key: 'totalCurrentAssets', label: 'Total Current Assets' },
    {
      key: 'propertyPlantEquipmentNet',
      label: 'Property Plant Equipment Net',
    },
    { key: 'goodwill', label: 'Goodwill' },
    { key: 'intangibleAssets', label: 'Intangible Assets' },
    { key: 'totalAssets', label: 'Total Assets' },
    { key: 'accountPayables', label: 'Account Payables' },
    { key: 'shortTermDebt', label: 'Short Term Debt' },
    { key: 'totalCurrentLiabilities', label: 'Total Current Liabilities' },
    { key: 'longTermDebt', label: 'Long Term Debt' },
    { key: 'totalLiabilities', label: 'Total Liabilities' },
    { key: 'commonStock', label: 'Common Stock' },
    { key: 'retainedEarnings', label: 'Retained Earnings' },
    { key: 'totalStockholdersEquity', label: 'Total Stockholders Equity' },
    { key: 'totalDebt', label: 'Total Debt' },
    { key: 'netDebt', label: 'Net Debt' },
  ];

export const balanceSheetChartGroups: ChartGroup<ICompanyBalanceSheetStatement>[] =
  [
    {
      id: 'liquidity',
      title: 'Liquidity',
      series: [
        { key: 'cashAndCashEquivalents', label: 'Cash and Cash Equivalents' },
        { key: 'shortTermInvestments', label: 'Short Term Investments' },
        { key: 'netReceivables', label: 'Net Receivables' },
        { key: 'inventory', label: 'Inventory' },
      ],
    },
    {
      id: 'asset-totals',
      title: 'Asset Totals',
      series: [
        { key: 'totalCurrentAssets', label: 'Total Current Assets' },
        { key: 'totalAssets', label: 'Total Assets' },
      ],
    },
    {
      id: 'long-term-assets',
      title: 'Long-Term Assets',
      series: [
        {
          key: 'propertyPlantEquipmentNet',
          label: 'Property Plant Equipment Net',
        },
        { key: 'goodwill', label: 'Goodwill' },
        { key: 'intangibleAssets', label: 'Intangible Assets' },
      ],
    },
    {
      id: 'liabilities',
      title: 'Liabilities',
      series: [
        { key: 'accountPayables', label: 'Account Payables' },
        { key: 'shortTermDebt', label: 'Short Term Debt' },
        { key: 'totalCurrentLiabilities', label: 'Total Current Liabilities' },
        { key: 'longTermDebt', label: 'Long Term Debt' },
        { key: 'totalLiabilities', label: 'Total Liabilities' },
      ],
    },
    {
      id: 'equity-and-debt',
      title: 'Equity And Debt',
      series: [
        { key: 'commonStock', label: 'Common Stock' },
        { key: 'retainedEarnings', label: 'Retained Earnings' },
        { key: 'totalStockholdersEquity', label: 'Total Stockholders Equity' },
        { key: 'totalDebt', label: 'Total Debt' },
        { key: 'netDebt', label: 'Net Debt' },
      ],
    },
  ];
