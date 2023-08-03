import Link from 'next/link';
import React, { FC } from 'react';
import { Logo } from '@/components/atoms';
import styles from './Header.module.sass';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo type="core" />
        </Link>
      </div>
    </header>
  );
};
