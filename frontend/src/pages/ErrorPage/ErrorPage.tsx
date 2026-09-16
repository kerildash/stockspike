import type { FC } from 'react';
import { ErrorTile } from '../../components/ErrorTile/ErrorTile';
import { UserProvider } from '../../context/useAuth';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { isRouteErrorResponse, useRouteError } from 'react-router';

interface IErrorPageProps {}

const ConfusedFace: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width='1em'
    height='1em'
    viewBox='0 0 36 36'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden
  >
    <circle
      cx='18'
      cy='18'
      r='14.8'
      fill='#FFCC4D'
      stroke='#000'
      strokeWidth='2'
    />
    <circle cx='12.5' cy='14.6' r='2' fill='#000' />
    <circle cx='23.5' cy='14.6' r='2' fill='#000' />
    <path
      d='M11.8 23.4 Q18 21.2 24.2 23.4'
      fill='none'
      stroke='#000'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

export const ErrorPage: FC<IErrorPageProps> = () => {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  const contactMeLink = (
    <a
      className='font-bold hover:underline'
      href='https://linktr.ee/kerildash'
      target='_blank'
      rel='noopener noreferrer'
    >
      contact me⮌
    </a>
  );

  const notFound = (
  <ErrorTile icon={ConfusedFace} message={'Page not found'}>
    <p className='text-yellow-700 pt-4'>
      The page has probably been moved, deleted, or not yet created.
    </p>
    <p className='text-yellow-700 pt-2'>
      If you think this is an error, please {' '}
      {contactMeLink} and report the issue.
    </p>
  </ErrorTile>)

  const defaultError = (
    <ErrorTile isWarning message={'Something went wrong'}>
      <p className='text-yellow-700 pt-4'>
        You can {contactMeLink}{' '}
        and tell about the error.
      </p>
    </ErrorTile>)

  return (
    <>
      <UserProvider>
        <Toaster position='top-right' />
        <div className='fixed top-0 right-0 left-0 z-50'>
          <Navbar />
        </div>
        <main className='pt-[var(--navbar-height)]'>
          <div className='flex flex-col h-[calc(100vh-var(--navbar-height))]'>
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
