import {
  type FC,
  useState,
  useEffect,
} from 'react';
import { searchCompanies, type ICompanySearch } from '../../services/FinancialApiService';
import { ListPortfolio } from '../../components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../components/CardList/CardList';
import Loading from '../../components/Loading/Loading';
import { ErrorTile } from '../../components/ErrorTile/ErrorTile';
import type { StockResponse } from '../../models/StockResponse';
import {
  addToPortfolioWithApi,
  deleteFromPortfolioWithApi,
  getPortfolioWithApi,
} from '../../services/PortfolioService';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/useAuth';
import {
  addToPortfolio,
  deleteFromPortfolio,
  getGuestPortfolio,
} from '../../services/GuestPortfolioService';
import { useSearchParams } from 'react-router';
import { Footer } from '../../components/Footer/Footer';
import { WarningPortfolio } from '../../components/Portfolio/WarningPortfolio/WarningPortfolio';
import { IoSearchOutline } from 'react-icons/io5';

interface ISearchPageProps {}

export const SearchPage: FC<ISearchPageProps> = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const [searchResponse, setSearchResponse] = useState<ICompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [portfolioItems, setPortfolioItems] = useState<StockResponse[]>([]);

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    getPortfolio();
  }, []);

  useEffect(() => {
    if (!query) {
      setSearchResponse([]);
      setServerError('');
      setLoading(false);
      return;
    }

    runSearch(query);
  }, [query]);

  const getPortfolio = () => {
    if (isLoggedIn()) {
      getPortfolioWithApi()
        .then((response) => {
          if (response?.data) {
            setPortfolioItems(response?.data);
          }
        })
        .catch(() => {
          toast.error('Error while getting the portfolio.');
        });
    } else {
      const portfolio = getGuestPortfolio();
      const portfolioMapped: StockResponse[] = portfolio.map((item) => {
        return {
          id: null,
          ticker: item,
          companyName: null,
          price: null,
          marketCap: null,
        };
      });
      setPortfolioItems(portfolioMapped);
    }
  };

  const onAddToPortfolio = (e: any) => {
    if (isLoggedIn()) {
      const item = e.target[0].value;
      addToPortfolioWithApi(item)
        .then((response) => {
          if (response?.status === 200) {
            toast.success(`${item.toUpperCase()}Item added to portfolio!`);
            getPortfolio();
          }
        })
        .catch(() => {
          toast.error('Failed to add item to the portfolio.');
        });
    } else {
      const item = e.target[0].value;
      const isAdded = addToPortfolio(item);
      if (!isAdded) {
        toast.error(`${item.toUpperCase()} already in portfolio.`);
        return;
      }

      toast.success(`${item.toUpperCase()}Item added to portfolio!`);
      getPortfolio();
    }
  };

  const onDeleteFromPortfolio = (e: any) => {
    console.log(e);
    if (isLoggedIn()) {
      deleteFromPortfolioWithApi(e.target.value)
        .then((response) => {
          if (response?.status === 200) {
            toast.success('Item removed from portfolio!');
            getPortfolio();
          }
        })
        .catch(() => {
          toast.error('Failed to remove item from the portfolio.');
        });
    } else {
      deleteFromPortfolio(e.target.value);
      getPortfolio();
    }
  };

  const runSearch = async (term: string) => {
    setLoading(true);
    const result = await searchCompanies(term);

    if (typeof result === 'string') {
      setServerError(result);
      console.log(result);
      setSearchResponse([]);
    } else {
      setServerError('');
      setSearchResponse(result);
    }
    setLoading(false);
  };

  return (
    <div className='flex flex-col min-h-[calc(100vh-var(--navbar-height))]'>
      <div className='flex-2 bg-gray-50'>
        {/* First Column - CardList and Loading */}
        <div>
          <div className='min-w-[20rem] p-6 lg:pr-[22rem]'>
            {!query ? (
              <div className='py-12 text-center'>
                <div className='mb-4 flex justify-center text-7xl text-gray-400'>
                  <IoSearchOutline />
                </div>
                <p className='text-xl font-medium text-gray-600'>
                  Search for a company
                </p>
                <p className='mt-2 text-gray-500'>
                  Use the search bar above to find stocks
                </p>
              </div>
            ) : loading ? (
              <Loading />
            ) : serverError ? (
              <ErrorTile message={serverError} className='m-15' isWarning />
            ) : (
              <CardList
                companies={searchResponse}
                onAddToPortfolio={onAddToPortfolio}
              />
            )}
          </div>
        </div>

        {/* Second Column - Portfolio */}
        <div className='hidden lg:block fixed top-[var(--navbar-height)] right-0 h-[calc(100vh-var(--navbar-height))] w-80 overflow-y-auto bg-white border-l border-gray-200'>
          <div className='p-6'>
            <div className='mb-6 border-b border-gray-200 pb-3'>
              <h2 className='text-2xl font-bold text-gray-900'>Portfolio</h2>
              {!isLoggedIn() && (
                <div className='pt-2'>
                  <WarningPortfolio />
                </div>
              )}
            </div>

            <ListPortfolio
              portfolioItems={portfolioItems}
              onDeleteFromPortfolio={onDeleteFromPortfolio}
            />
          </div>
        </div>
      </div>

      <Footer className='lg:pr-80' />
    </div>
  );
};
