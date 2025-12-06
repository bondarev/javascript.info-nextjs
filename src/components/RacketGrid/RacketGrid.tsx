import styles from './RacketGrid.module.css';
import { Racket } from '@/types';
import { RacketCard } from '@/components';

type RacketGridProps = {
  rackets: Racket[];
  priorityCount?: number;
};

function RacketGrid({ rackets, priorityCount = 10 }: RacketGridProps) {
  return (
    <div className={styles.grid}>
      {rackets.map((racket, index) => (
        <RacketCard
          key={racket.id}
          racket={racket}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}

export { RacketGrid };
