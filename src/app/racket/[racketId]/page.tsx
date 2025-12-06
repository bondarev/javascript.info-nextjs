import { notFound } from 'next/navigation';
import Image from 'next/image';

import styles from './page.module.css';
import { getRacketById, getRackets } from '@/lib/api';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: PageProps<'/racket/[racketId]'>): Promise<Metadata> {
  const { racketId } = await params;
  const racket = await getRacketById(Number(racketId));

  if (!racket) return {};

  return {
    title: racket.name,
    description: racket.description,
  };
}

export async function generateStaticParams() {
  const rackets = await getRackets();

  return rackets.slice(0, 3).map((racket) => ({
    racketId: String(racket.id),
  }));
}

export default RacketPage;

async function RacketPage({ params }: PageProps<'/racket/[racketId]'>) {
  const { racketId: racketIdParam } = await params;
  const racketId = Number(racketIdParam);

  if (Number.isNaN(racketId)) {
    notFound();
  }

  const racket = await getRacketById(racketId);

  if (!racket) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <header className={styles.info}>
        <span className={styles.brand}>{racket.brand.name}</span>
        <h1 className={styles.name}>{racket.name}</h1>
        <p className={styles.description}>{racket.description}</p>
      </header>
      <figure className={styles.imageWrapper}>
        <Image
          src={racket.imageUrl}
          alt={`Теннисная ракетка ${racket.name}`}
          fill
          priority
          className={styles.image}
        />
      </figure>
      <div className={styles.price} aria-label={`Цена: ${racket.price} евро`}>
        €{racket.price.toFixed(2)}
      </div>
    </article>
  );
}
