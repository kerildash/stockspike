import type { ChartGroup, StatementColumn } from '../../../models/Statement';
import type { ICompanyIncomeStatement } from '../../../services/FinancialApiService';

export const incomeStatementColumns: StatementColumn<ICompanyIncomeStatement>[] =
  [
    { key: 'date', label: 'Date' },
    { key: 'revenue', label: 'Revenue' },
    { key: 'costOfRevenue', label: 'Cost Of Revenue' },
    { key: 'grossProfit', label: 'Gross Profit' },
    {
      key: 'depreciationAndAmortization',
      label: 'Depreciation & Amortization',
    },
    { key: 'ebitda', label: 'EBITDA' },
    { key: 'ebit', label: 'EBIT' },
    { key: 'operatingIncome', label: 'Operating Income' },
    {
      key: 'nonOperatingIncomeExcludingInterest',
      label: 'Non-Operating Income',
    },
    {
      key: 'totalOtherIncomeExpensesNet',
      label: 'Total Other Income/Expenses Net',
    },
    { key: 'incomeBeforeTax', label: 'Income Before Tax' },
    { key: 'incomeTaxExpense', label: 'Income Tax Expense' },
    { key: 'netIncome', label: 'Net Income' },
    { key: 'eps', label: 'Earnings Per Share' },
  ];

export const incomeStatementChartGroups: ChartGroup<ICompanyIncomeStatement>[] =
  [
    {
      id: 'revenue-and-gross-profit',
      title: 'Revenue And Gross Profit',
      series: [
        { key: 'revenue', label: 'Revenue' },
        { key: 'costOfRevenue', label: 'Cost Of Revenue' },
        { key: 'grossProfit', label: 'Gross Profit' },
      ],
    },
    {
      id: 'operating-results',
      title: 'Operating Results',
      series: [
        { key: 'operatingIncome', label: 'Operating Income' },
        { key: 'ebit', label: 'EBIT' },
        { key: 'ebitda', label: 'EBITDA' },
        {
          key: 'depreciationAndAmortization',
          label: 'Depreciation & Amortization',
        },
      ],
    },
    {
      id: 'other-income',
      title: 'Other Income',
      series: [
        {
          key: 'nonOperatingIncomeExcludingInterest',
          label: 'Non-Operating Income',
        },
        {
          key: 'totalOtherIncomeExpensesNet',
          label: 'Total Other Income/Expenses Net',
        },
      ],
    },
    {
      id: 'earnings',
      title: 'Earnings',
      series: [
        { key: 'incomeBeforeTax', label: 'Income Before Tax' },
        { key: 'incomeTaxExpense', label: 'Income Tax Expense' },
        { key: 'netIncome', label: 'Net Income' },
      ],
    },
    {
      id: 'per-share',
      title: 'Per Share',
      series: [{ key: 'eps', label: 'Earnings Per Share' }],
    },
  ];
