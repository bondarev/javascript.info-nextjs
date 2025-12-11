import styles from './Error.module.css';
import { Button } from '@/components';

type ButtonConfig =
  | { text: string; href: string }
  | { text: string; onRetry: () => void }
  | null;

type BaseErrorProps = {
  code: string;
  title: string;
  description: string;
  button?: ButtonConfig;
};

function BaseError({ code, title, description, button }: BaseErrorProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>{code}</h1>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {button &&
        ('href' in button ? (
          <Button href={button.href}>{button.text}</Button>
        ) : (
          <Button onClick={button.onRetry}>{button.text}</Button>
        ))}
    </div>
  );
}

export { BaseError };
