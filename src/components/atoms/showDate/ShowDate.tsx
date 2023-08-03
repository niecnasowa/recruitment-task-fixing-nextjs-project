import cx from 'classnames';
import { FC } from 'react';
import { formatDate } from '@/helpers';
import styles from './ShowDate.module.sass';

interface ShowDateProps {
  date: string;
  extraClass?: string;
}

export const ShowDate: FC<ShowDateProps> = ({ date, extraClass }) => {
  return (
    <span className={cx(styles.date, extraClass)}>{formatDate(date)}</span>
  );
};
