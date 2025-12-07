import Link from 'next/link';

import styles from './page.module.css';
import { getTop10Rackets } from '@/lib/api';
import { RacketGrid, Button } from '@/components';

async function HomePage() {
  const rackets = await getTop10Rackets();

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>ТОП-10 ракеток</h1>
        <Link
          href="/rackets"
          className={styles.link}
          aria-label="Смотреть все ракетки"
        >
          Все ↗
        </Link>
      </header>
      <RacketGrid rackets={rackets} priorityCount={6} />
      <div className={styles.showMore}>
        <Button href="/rackets">Все ракетки</Button>
      </div>
    </>
  );
}

export default HomePage;
