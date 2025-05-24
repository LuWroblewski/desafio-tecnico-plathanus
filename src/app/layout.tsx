import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/layout-components/footer/footer';
import { raleway } from './fonts';
import Navbar from './components/layout-components/navbar/navbar';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Menu - Desafio tecnico Plathanus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={raleway.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
