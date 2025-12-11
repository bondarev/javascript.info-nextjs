import styles from './RacketsSection.module.css';
import { RacketGrid, Button, Link } from '@/components';
import { ApiResponse } from '@/services/api-client';
import { Racket } from '@/types';

type RacketsSectionProps = {
  title: string;
  fetchData: () => Promise<ApiResponse<Racket[]>>;
  showMoreButton?: boolean;
  priorityImagesCount?: number;
};

async function RacketsSection({
  title,
  fetchData,
  showMoreButton = false,
  priorityImagesCount = 6,
}: RacketsSectionProps) {
  const response = await fetchData();

  if (!response.success) {
    console.error(`Failed to load section "${title}":`, response.error);
    return null;
  }

  const rackets = response.data;

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
      <RacketGrid rackets={rackets} priorityCount={priorityImagesCount} />
      {showMoreButton && (
        <div className={styles.showMore}>
          <Button href="/rackets">Все ракетки</Button>
        </div>
      )}
    </section>
  );
}

export { RacketsSection };
