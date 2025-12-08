import { Suspense } from 'react';
import { getRackets, getTop10Rackets, type ApiResponse } from '@/services';
import { RacketsSection, RacketsSectionSkeleton } from '@/components';
import type { Racket } from '@/types';

type SectionConfig = {
  id: string;
  title: string;
  fetchData: () => Promise<ApiResponse<Racket[]>>;
  showMoreButton?: boolean;
  priorityImagesCount?: number;
};

const pageSections: SectionConfig[] = [
  {
    id: 'popular',
    title: 'Популярные ракетки',
    fetchData: getTop10Rackets,
    showMoreButton: true,
  },
  {
    id: 'all',
    title: 'Ракетки',
    fetchData: () => getRackets({ limit: 10 }),
    showMoreButton: true,
  },
];

async function HomePage() {
  return (
    <>
      {pageSections.map((section) => (
        <Suspense
          key={section.id}
          fallback={
            <RacketsSectionSkeleton
              title={section.title}
              showMoreButton={section.showMoreButton}
            />
          }
        >
          <RacketsSection {...section} />
        </Suspense>
      ))}
    </>
  );
}

export default HomePage;
