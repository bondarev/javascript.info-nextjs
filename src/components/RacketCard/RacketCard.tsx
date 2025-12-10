import Image from 'next/image';

import styles from './RacketCard.module.css';
import { Link } from '@/components';
import { Racket } from '@/types';

type RacketCardProps = {
  racket: Racket;
  priority?: boolean;
};

function RacketCard({ racket, priority }: RacketCardProps) {
  return (
    <article className={styles.card}>
      <figure className={styles.imageWrapper}>
        <Image
          src={racket.imageUrl}
          alt={`Теннисная ракетка ${racket.name}`}
          fill
          priority={priority}
          className={styles.image}
        />
      </figure>
      <h3 className={styles.name}>
        <Link href={`/racket/${racket.id}`} className={styles.link}>
          {racket.name}
        </Link>
      </h3>
    </article>
  );
}

export { RacketCard };
