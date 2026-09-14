import type { ChartGroup, StatementColumn } from '../../../models/Statement';
import type { ICompanyCashflowStatement } from '../../../services/FinancialApiService';

export const cashflowStatementColumns: StatementColumn<ICompanyCashflowStatement>[] =
  [
    { key: 'date', label: 'Date' },
    { key: 'netIncome', label: 'Net Income' },
    {
      key: 'netCashProvidedByOperatingActivities',
      label: 'Net Cash From Operating Activities',
    },
    {
      key: 'netCashProvidedByInvestingActivities',
      label: 'Net Cash From Investing Activities',
    },
    { key: 'netDividendsPaid', label: 'Net Dividends Paid' },
    {
      key: 'netCashProvidedByFinancingActivities',
      label: 'Net Cash From Financing Activities',
    },
    { key: 'netChangeInCash', label: 'Net Change In Cash' },
    { key: 'operatingCashFlow', label: 'Operating Cash Flow' },
    { key: 'capitalExpenditure', label: 'Capital Expenditure' },
    { key: 'freeCashFlow', label: 'Free Cash Flow' },
  ];

export const cashflowStatementChartGroups: ChartGroup<ICompanyCashflowStatement>[] =
  [
    {
      id: 'cash-from-activities',
      title: 'Cash From Activities',
      series: [
        {
          key: 'netCashProvidedByOperatingActivities',
          label: 'Net Cash From Operating Activities',
        },
        {
          key: 'netCashProvidedByInvestingActivities',
          label: 'Net Cash From Investing Activities',
        },
        {
          key: 'netCashProvidedByFinancingActivities',
          label: 'Net Cash From Financing Activities',
        },
        { key: 'netChangeInCash', label: 'Net Change In Cash' },
      ],
    },
    {
      id: 'cash-generation',
      title: 'Cash Generation',
      series: [
        { key: 'netIncome', label: 'Net Income' },
        { key: 'operatingCashFlow', label: 'Operating Cash Flow' },
        { key: 'freeCashFlow', label: 'Free Cash Flow' },
        { key: 'capitalExpenditure', label: 'Capital Expenditure' },
      ],
    },
    {
      id: 'distributions',
      title: 'Distributions',
      series: [{ key: 'netDividendsPaid', label: 'Net Dividends Paid' }],
    },
  ];
