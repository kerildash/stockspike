import type { FC } from 'react';
import { ErrorTile } from '../../components/ErrorTile/ErrorTile';
import { UserProvider } from '../../context/useAuth';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { isRouteErrorResponse, useRouteError } from 'react-router';
interface IErrorPageProps {}

export const ErrorPage: FC<IErrorPageProps> = () => {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;
  const { t } = useTranslation();

  const contactMeLink = (
    <a
      className='font-bold hover:underline'
      href='https://linktr.ee/kerildash'
      target='_blank'
      rel='noopener noreferrer'
    >
      {t('error.contactMe', { symbol: '⮌' })}
    </a>
  );

  const notFound = (
  <ErrorTile title='😕' message={t('error.pageNotFound.title')}>
    <p className='text-yellow-700 pt-4'>
      {t('error.pageNotFound.description')}
    </p>
    <p className='text-yellow-700 pt-2'>
      {t('error.pageNotFound.contactProposal1')} {' '}
      {contactMeLink} {t('error.pageNotFound.contactProposal2')}
    </p>
  </ErrorTile>)

  const defaultError = (
    <ErrorTile isWarning message={t('error.defaultError.title')}>
      <p className='text-yellow-700 pt-4'>
        {t('error.defaultError.contactProposal1')} {contactMeLink} {' '}
        {t('error.defaultError.contactProposal2')}
      </p>
    </ErrorTile>)

  return (
    <>
      <UserProvider>
        <Toaster position='top-right' />
        <div className='fixed top-0 right-0 left-0 z-50'>
          <Navbar />
        </div>
        <main className='pt-16'>
          <div className='flex flex-col h-[calc(100vh-4rem)]'>
            <div className='py-10 px-15 flex-1'>
              {isNotFound ? notFound : defaultError}
            </div>
            <Footer />
          </div>
          
        </main>
      </UserProvider>
    </>
  );
};
