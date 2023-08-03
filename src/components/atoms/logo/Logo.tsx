import { FC } from 'react';
import { logos } from './logos';
import styles from './Logo.module.sass';

export type IconType = 'gicon' | 'core' | 'strapline';

export interface LogoProps {
  type: IconType;
}

export const Logo: FC<LogoProps> = ({ type }) => {
  return (
    <div className={styles.logo}>
      <svg
        data-name="GigaclerLogo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={logos[type].viewBox}
      >
        {logos[type].paths.map((p, i) => (
          <path key={i} d={p} className="fill-white" />
        ))}
      </svg>
    </div>
  );
};
