import styles from './RacketsSection.module.css';
import { RacketGridSkeleton, Button, Link } from '@/components';

type RacketsSectionSkeletonProps = {
  title: string;
  showMoreButton?: boolean;
};

function RacketsSectionSkeleton({
  title,
  showMoreButton = false,
}: RacketsSectionSkeletonProps) {
  return (
    <section>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {showMoreButton && (
          <Link
            href="/rackets"
            className={styles.link}
            aria-label="Смотреть все ракетки"
          >
            Все ↗
          </Link>
        )}
      </header>
      <RacketGridSkeleton />
      {showMoreButton && (
        <div className={styles.showMore}>
          <Button href="/rackets">Все ракетки</Button>
        </div>
      )}
    </section>
  );
}

export { RacketsSectionSkeleton };
