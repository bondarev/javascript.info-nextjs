import { clsx } from '@/lib/utils';
import styles from './page.module.css';

export default function RacketLoading() {
  return (
    <article className={styles.page}>
      <header className={styles.info}>
        <span className={clsx(styles.brand, styles.brandSkeleton, 'skeleton')}>
          &nbsp;
        </span>
        <h1 className={clsx(styles.name, styles.nameSkeleton, 'skeleton')}>
          &nbsp;
        </h1>
        <p
          className={clsx(
            styles.description,
            styles.descriptionSkeleton,
            'skeleton',
          )}
        >
          &nbsp;
        </p>
      </header>
      <figure className={styles.imageWrapper}>
        <div className={clsx(styles.imageSkeleton, 'skeleton')} />
      </figure>
      <div className={clsx(styles.price, styles.priceSkeleton, 'skeleton')}>
        &nbsp;
      </div>
    </article>
  );
}
