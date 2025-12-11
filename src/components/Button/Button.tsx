import styles from './Button.module.css';
import { Link } from '@/components';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ href, children, onClick }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export { Button };
