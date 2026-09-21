import { type FC, useEffect, useState } from 'react';
import { getCompanyInfo, type ICompanyInfo } from '../../services/FinancialApiService';
import { useParams } from 'react-router-dom';
import { CompanyNav } from '../../components/CompanyInfo/CompanyNav/CompanyNav';
import { Dashboard } from '../../components/CompanyInfo/Dashboard/Dashboard';
import { BigTile } from '../../components/CompanyInfo/BigTile/BigTile';
import Loading from '../../components/Loading/Loading';
import { ErrorTile } from '../../components/ErrorTile/ErrorTile';
import { Footer } from '../../components/Footer/Footer';
import { formatCompactCurrency } from '../../utils/formatNumber';

interface ICompanyInfoPageProps {}

export const CompanyInfoPage: FC<ICompanyInfoPageProps> = () => {
  let { ticker } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [companyInfo, setCompanyInfo] = useState<ICompanyInfo>();

  useEffect(() => {
    const getProfileInit = async () => {
      if (!ticker) {
        setError('No ticker provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const result = await getCompanyInfo(ticker);

        if (typeof result === 'string') {
          setError(result);
        } else if (result) {
          setCompanyInfo(result);
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

  const pageBody = loading ? (
    <Loading />
  ) : error ? (
    <ErrorTile message={error} className='mx-5 md:mx-15 mt-5 md:mt-10' isWarning />
  ) : (
    <Dashboard ticker={ticker!} description={companyInfo?.description!}>
      <div className='h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 pb-5'>
        <BigTile title='Company Name' info={companyInfo?.companyName!} />
        <BigTile title='Sector' info={companyInfo?.sector!} />
        <BigTile title='Stock Price' info={formatCompactCurrency(companyInfo?.price)} />
        <BigTile
          title='Market Cap'
          info={formatCompactCurrency(companyInfo?.marketCap)}
        />
      </div>
    </Dashboard>
  );

  return (
    <div className='flex min-h-[calc(100vh-var(--navbar-height))] flex-col md:flex-row'>
      <CompanyNav />
      <div className='flex min-w-0 flex-1 flex-col'>
        <div className='flex-1'>{pageBody}</div>
        <Footer />
      </div>
    </div>
  );
};
