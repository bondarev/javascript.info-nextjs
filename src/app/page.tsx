import { Suspense } from 'react';
import { getRackets, getTop10Rackets } from '@/services';
import { RacketsSection, RacketsSectionSkeleton } from '@/components';

async function HomePage() {
  const sectionPopularTitle = 'Популярные ракетки';
  const sectionRacketsTitle = 'Ракетки';
  const showMoreButton = true;

  return (
    <>
      <Suspense
        fallback={
          <RacketsSectionSkeleton
            title={sectionPopularTitle}
            showMoreButton={showMoreButton}
          />
        }
      >
        <RacketsSection
          title={sectionPopularTitle}
          fetchData={getTop10Rackets}
          showMoreButton={showMoreButton}
        />
      </Suspense>
      <Suspense
        fallback={
          <RacketsSectionSkeleton
            title={sectionRacketsTitle}
            showMoreButton={showMoreButton}
          />
        }
      >
        <RacketsSection
          title={sectionRacketsTitle}
          fetchData={() => getRackets({ limit: 10 })}
          showMoreButton={showMoreButton}
        />
      </Suspense>
    </>
  );
}

export default HomePage;
