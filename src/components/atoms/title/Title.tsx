import React, { FC } from 'react';
import cx from 'classnames';
import styles from './Title.module.sass';

interface TitleProps {
  text: string;
  type?: 'normal' | 'center';
  size?: 'normal' | 'small'
}

export const Title: FC<TitleProps> = ({ text, type, size = 'normal' }) => {
  const headerClassName = cx(styles.title, {
    [styles.titleCenter]: type === 'center',
    [styles.titleSmall]: size === 'small',
  });

  return <h1 className={headerClassName}>{text}</h1>;
};
