'use client';

import { Route } from 'next';
import { usePathname } from 'next/navigation';

import styles from './Header.module.css';
import { Link, Logo } from '@/components';
import { clsx } from '@/lib/utils';

type NavLinkProps = {
  href: Route;
  label: string;
};

const NAV_LINKS: NavLinkProps[] = [
  { href: '/', label: 'Главная' },
  { href: '/rackets/top-10', label: 'ТОП-10' },
  { href: '/rackets', label: 'Все ракетки' },
];

function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={clsx(styles.link, isActive && styles.linkActive)}
      href={href}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Logo size="lg" />
      </Link>
      <nav className={styles.nav}>
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href} label={label} />
        ))}
      </nav>
    </header>
  );
}

export { Header };
