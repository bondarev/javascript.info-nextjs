import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { Metadata } from 'next';

import { getMetaRacketById } from '@/services';
import { Racket, RacketSkeleton } from '@/components';

async function parseRacketId(
  params: Promise<{ racketId: string }>,
): Promise<number | null> {
  const { racketId } = await params;
  const id = Number(racketId);

  if (Number.isNaN(id) || id < 1) {
    return null;
  }

  return id;
}

export async function generateMetadata({
  params,
}: PageProps<'/racket/[racketId]'>): Promise<Metadata> {
  const racketId = await parseRacketId(params);

  if (racketId === null) {
    return {};
  }

  const response = await getMetaRacketById(racketId);

  if (!response.success) return {};

  return {
    title: response.data.name,
    description: response.data.description,
  };
}

async function RacketPage({ params }: PageProps<'/racket/[racketId]'>) {
  const racketId = await parseRacketId(params);

  if (racketId === null) {
    notFound();
  }

  // Force metadata to resolve before streaming starts
  await getMetaRacketById(racketId);

  return (
    <Suspense fallback={<RacketSkeleton />}>
      <Racket racketId={racketId} />
    </Suspense>
  );
}

export default RacketPage;
