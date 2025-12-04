import styles from './page.module.css';
import { getBrands, getRackets } from '@/lib/api';
import { RacketGrid } from '@/components';
import { clsx } from '@/lib/utils';
import { Brand } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Найти ракетку для тенниса',
};

async function RacketsPage() {
  const rackets = await getRackets();

  const brands = await getBrands();
  const brandOptions: Brand[] = [{ id: -1, name: 'All' }, ...brands];

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar} aria-label="Фильтры">
        <h2 className={styles.filterTitle}>Бренд</h2>
        <ul
          className={styles.filterList}
          role="group"
          aria-label="Фильтр по бренду"
        >
          {brandOptions.map(({ id, name: brand }) => (
            <li key={id}>
              <button
                className={clsx(
                  styles.filterButton,
                  brand === 'All' && styles.filterButtonActive,
                )}
              >
                {brand}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <section className={styles.content}>
        <h1 className={styles.title}>Все ракетки</h1>
        <RacketGrid rackets={rackets} priorityCount={12} />
      </section>
    </div>
  );
}

export default RacketsPage;
