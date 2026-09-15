import type { IconType } from 'react-icons';
import {
  IoBusinessOutline,
  IoCashOutline,
  IoReaderOutline,
  IoRepeatOutline,
} from 'react-icons/io5';

export interface ICompanySection {
  path: string;
  label: string;
  icon: IconType;
}

export const companySections = {
  companyProfile: {
    path: 'company-profile',
    label: 'Company Profile',
    icon: IoBusinessOutline,
  },
  incomeStatement: {
    path: 'income-statement',
    label: 'Income Statement',
    icon: IoCashOutline,
  },
  balanceSheet: {
    path: 'balance-sheet',
    label: 'Balance Sheet',
    icon: IoReaderOutline,
  },
  cashflowStatement: {
    path: 'cashflow-statement',
    label: 'Cashflow Statement',
    icon: IoRepeatOutline,
  },
} satisfies Record<string, ICompanySection>;

export const companySectionList: ICompanySection[] =
  Object.values(companySections);
