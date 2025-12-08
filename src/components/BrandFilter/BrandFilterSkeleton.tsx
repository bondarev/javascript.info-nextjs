import styles from './BrandFilter.module.css';
import { clsx } from '@/lib/utils';

function BrandFilterSkeleton() {
  return (
    <>
      <h2 className={styles.title}>Бренд</h2>
      <ul className={styles.list}>
        {[...new Array(5)].map((_, i) => (
          <li key={i}>
            <div className={clsx(styles.skeleton, 'skeleton')} />
          </li>
        ))}
      </ul>
    </>
  );
}

export { BrandFilterSkeleton };
