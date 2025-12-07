import styles from './page.module.css';
import { getRackets } from '@/services';
import {
  BrandFilter,
  BrandFilterSkeleton,
  RacketsSection,
  RacketsSectionSkeleton,
} from '@/components';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Найти ракетку для тенниса',
};

async function RacketsPage() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar} aria-label="Фильтры">
        <Suspense fallback={<BrandFilterSkeleton />}>
          <BrandFilter />
        </Suspense>
      </aside>
      <section className={styles.content}>
        <Suspense fallback={<RacketsSectionSkeleton title="Все ракетки" />}>
          <RacketsSection
            title="Все ракетки"
            fetchData={() => getRackets({ limit: 20 })}
            priorityImagesCount={12}
          />
        </Suspense>
      </section>
    </div>
  );
}

export default RacketsPage;
