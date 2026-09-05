import { useState, type FC } from 'react';
import { useNavigate } from 'react-router';
import Search from '../../components/Search/Search';
import { StartLoginRegister } from '../../components/StartLoginRegister/StartLoginRegister';
import { Footer } from '../../components/Footer/Footer';

interface IHomePageProps {}

export const HomePage: FC<IHomePageProps> = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onChange = (e: any) => {
    setSearch(e.target.value);
  }

  const startSearch = () => 
    navigate('/search', { state: { search: search.trim() } })

  const onKeyDown = async (e: any) => {
    if (e.key === 'Enter' && search.trim()) {
        startSearch();
    }
  };

  return (
    <>
    <div>
      <div className='lg:w-full lg:max-w-340 min-h-[calc(100vh-7.5rem)] md:px-40 sm:px-20 px-10 py-5 lg:mx-auto flex items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-15 '>
          <div className='flex flex-col justify-between gap-6'>

            <div className='font-bold text-4xl'>
              <u>Track</u> stocks, <u>build</u> your portfolio and{' '}
              <u>explore</u> finansial metrics with{' '}
              <span className='text-blue-800'>StockSpike</span>
            </div>

            <div>
              <div className='text-4xl pb-8'>Try right now, register later</div>
              <Search
                onChange={onChange}
                onKeyDown={onKeyDown}
                search={search}
                startSearch={startSearch}
                style='hero'
              />
            </div>
          </div>

          <div className='flex flex-col justify-between gap-10'>
            <div>
              <div className='text-4xl pb-8'>Dive deeper with personal account</div>
              <StartLoginRegister />
            </div>

          </div>
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
};
