import { Oswald, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../components/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const stencil = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-stencil',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Thompson Station Depot',
  description:
    'We buy and sell furniture, equipment, tools, and finds worth a fair price. Thompson Station, TN.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${stencil.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body min-h-screen flex flex-col bg-manila-grain">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
