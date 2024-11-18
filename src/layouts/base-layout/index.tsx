import { clsx } from 'clsx';
import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { $theme } from 'shared/lib/theme';
import { Header } from 'widgets/header';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const theme = useUnit($theme);

  return (
    <div className={clsx('app', [theme])}>
      <div className='container'>
        <Sidebar />
        <Navbar />
        <div className='wrapper'>
          <Header />
          <div className='content-page'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
