import styles from './RacketGrid.module.css';
import { clsx } from '@/lib/utils';

function RacketGridSkeleton() {
  return (
    <div className={styles.grid}>
      {[...new Array(10)].map((_, i) => (
        <div key={i} className={styles.cardSkeleton}>
          <div className={clsx(styles.imageSkeleton, 'skeleton')} />
          <div className={clsx(styles.nameSkeleton, 'skeleton')} />
        </div>
      ))}
    </div>
  );
}

export { RacketGridSkeleton };
