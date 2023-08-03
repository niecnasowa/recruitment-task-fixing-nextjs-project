import React, { FC, ReactNode } from 'react';
import { Main } from './main/Main';
import { Header } from './title/Header';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
