import styles from './Logo.module.css';
import { clsx } from '@/lib/utils';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

function Logo({ size = 'md' }: LogoProps) {
  return <span className={clsx(styles.logo, styles[size])}>TENNIS STORE</span>;
}

export { Logo };
