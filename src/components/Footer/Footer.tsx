import styles from './Footer.module.css';
import { Logo } from '@/components';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo size="xl" />
        </div>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Tennis Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
