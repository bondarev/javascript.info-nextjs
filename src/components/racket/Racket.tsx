import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getRacketById } from '@/services';
import styles from './racket.module.css';

async function Racket({ racketId }: { racketId: number }) {
  const response = await getRacketById(racketId);

  if (!response.success) {
    notFound();
  }

  const racket = response.data;

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

export { Racket };
