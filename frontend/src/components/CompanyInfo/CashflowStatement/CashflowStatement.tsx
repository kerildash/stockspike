import { useEffect, useState, type FC } from 'react';
import {
  type ICompanyCashflowStatement,
  getCashflowStatement,
} from '../../../services/FinancialApiService';
import { Link, useOutletContext } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { ErrorTile } from '../../ErrorTile/ErrorTile';
import { StatementPanel } from '../../StatementPanel/StatementPanel';
import { companySections } from '../companySections';
import {
  cashflowStatementChartGroups,
  cashflowStatementColumns,
} from './cashflowStatementConfig';
interface ICashflowStatementProps {}
export const CashflowStatement: FC<ICashflowStatementProps> = () => {
  const { ticker } = useOutletContext<{ ticker: string }>();
  const [cashflowStatement, setCashflowStatement] = useState<
    ICompanyCashflowStatement[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getProfileInit = async () => {
      try {
        setLoading(true);
        const result = await getCashflowStatement(ticker);

        if (typeof result === 'string') {
          setError(result);
        } else if (result) {
          setCashflowStatement(result);
          setError(null);
        } else {
          setError('No company data found');
        }
      } catch (err) {
        setError('Failed to fetch company info');
      } finally {
        setLoading(false);
      }
    };

    getProfileInit();
  }, [ticker]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorTile message='Cashflow statement not available.' isWarning>
          <div>
            <p className='text-yellow-700'>Please check another company, for example:</p>
            <div className='mt-4 grid grid-cols-4 gap-2 w-fit mx-auto'>
            {['AAPL', 'MSFT', 'TSLA', 'META'].map((ticker) => (
              <Link
                title='View company details'
                to={`/company/${ticker}/company-profile`}
                className='border-1 border-yellow-200 bg-white hover:border-green-300 hover:bg-green-100 text-gray-800 font-medium py-2 px-4 rounded cursor-pointer transition-colors duration-200 whitespace-nowrap'
              >
                {ticker}
              </Link>
            ))}
            </div>
          </div>
        </ErrorTile>
      ) : (
        <StatementPanel
          title={companySections.cashflowStatement.label}
          data={cashflowStatement}
          columns={cashflowStatementColumns}
          chartGroups={cashflowStatementChartGroups}
        />
      )}
    </div>
  );
};
