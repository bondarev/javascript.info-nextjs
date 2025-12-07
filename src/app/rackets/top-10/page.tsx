import { Metadata } from 'next';

import { Suspense } from 'react';
import { getTop10Rackets } from '@/services';
import { RacketsSection, RacketsSectionSkeleton } from '@/components';

export const metadata: Metadata = {
  title: 'ТОП-10 ракеток для тенниса',
};

async function Top10RacketsPage() {
  const pageTitle = 'ТОП-10 ракеток';

  return (
    <>
      <Suspense fallback={<RacketsSectionSkeleton title={pageTitle} />}>
        <RacketsSection title={pageTitle} fetchData={getTop10Rackets} />
      </Suspense>
    </>
  );
}

export default Top10RacketsPage;
