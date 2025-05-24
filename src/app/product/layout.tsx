import type { Metadata } from 'next';
import '../globals.css';
import { raleway } from '../fonts';
import Navbar from '../components/layout-components/navbar/navbar';
import Footer from '../components/layout-components/footer/footer';

export const metadata: Metadata = {
  title: 'Menu Produto',
  description: 'Menu Produto - Desafio tecnico Plathanus',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={raleway.className}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
