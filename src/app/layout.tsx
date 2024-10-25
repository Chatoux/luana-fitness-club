import '../styles/globals.css';
import { PropsWithChildren } from 'react';
import { Header } from './components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;