import React, { FC } from "react";
import styles from './Header.module.sass';

interface HeaderPropsI {
    text: string;
}

export const Header: FC<HeaderPropsI> = ({ text }) => {
    return (
        <h1 className={styles.header}>
            {text}
        </h1>
    )
}