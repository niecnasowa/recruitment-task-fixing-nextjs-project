import cx from 'classnames';
import React, { FC } from 'react';
// I have decided to change library, the old one is really old and no longer maintained
// I would think more actually about post rendering, because this kind of mechanism is
// potentially vulnerable for XSS
import parse from 'html-react-parser';
import { adventPro } from '@/styles/fonts';
import styles from './PostDescription.module.sass';

interface PostDescriptionProps {
  text: string;
  type?: 'normal' | 'center';
  extraClass?: string;
}

export const PostDescription: FC<PostDescriptionProps> = ({
  text,
  type,
  extraClass,
}) => {
  return (
    <p
      className={cx(styles.postDescription, adventPro.className, extraClass, {
        [styles.postDescriptionCenter]: type === 'center',
      })}
    >
      {parse(text)}
    </p>
  );
};
