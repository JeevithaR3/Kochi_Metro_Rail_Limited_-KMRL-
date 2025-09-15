import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

const Layout = ({ children, hideHeader = false, hideFooter = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {!hideHeader && <Header />}
      <main className={!hideHeader ? 'pt-16' : ''}>
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;