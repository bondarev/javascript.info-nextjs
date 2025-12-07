import styles from './NotFound.module.css';
import { Button } from '@/components';

type NotFoundProps = {
  showButton?: boolean;
  message?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

function NotFound({
  showButton = true,
  message = 'Страница не найдена',
  description = 'К сожалению, запрашиваемая страница не существует',
  buttonText = '← На главную',
  buttonHref = '/',
}: NotFoundProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>{message}</p>
      <p className={styles.description}>{description}</p>
      {showButton && <Button href={buttonHref}>{buttonText}</Button>}
    </div>
  );
}

export { NotFound };
