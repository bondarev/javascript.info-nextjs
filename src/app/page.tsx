import { Suspense } from 'react';
import { getRackets, getTop10Rackets, type ApiResponse } from '@/services';
import { RacketsSection, RacketsSectionSkeleton } from '@/components';
import type { Racket } from '@/types';

type SectionConfig = {
  title: string;
  fetchData: () => Promise<ApiResponse<Racket[]>>;
  showMoreButton?: boolean;
  priorityImagesCount?: number;
};

async function HomePage() {
  const sections: SectionConfig[] = [
    {
      title: 'Популярные ракетки',
      fetchData: getTop10Rackets,
      showMoreButton: true,
    },
    {
      title: 'Ракетки',
      fetchData: () => getRackets({ limit: 10 }),
      showMoreButton: true,
    },
  ];

  return (
    <>
      {sections.map((section, index) => (
        <Suspense
          key={index}
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
