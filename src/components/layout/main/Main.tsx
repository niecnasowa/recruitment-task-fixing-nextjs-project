import cx from 'classnames';
import React, { FC, ReactNode } from 'react';
import { inter } from '@/styles/fonts';
import styles from './Main.module.sass';

export interface MainContentProps {
  children: ReactNode;
}

export const Main: FC<MainContentProps> = ({ children }) => {
  return (
    <>
      <main className={cx(styles.main, inter.className)}>{children}</main>
    </>
  );
};
