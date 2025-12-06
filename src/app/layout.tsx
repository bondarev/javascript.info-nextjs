import type { Metadata } from 'next';

import '@/styles/globals.css';

import styles from './layout.module.css';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: {
    default: 'TENNIS STORE',
    template: '%s | TENNIS STORE',
  },
  description:
    'Теннисный магазин с большим выбором ракеток для игроков любого уровня',
  icons: {
    icon: [{ url: '/assets/favicon/favicon.svg', type: 'image/svg+xml' }],
    apple: [
      {
        url: '/assets/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru">
      <body>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default Layout;
