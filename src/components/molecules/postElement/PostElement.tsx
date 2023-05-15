import React, { FC } from "react";
import styles from './PostElement.module.sass';
import { PostT } from "../../../data/postsListMock";

export const PostElement: FC<PostT> = ({ title, category, author, shortDescription, date}) => {
    return (
        <article className={styles.postElement}>
            <h2 className={styles.postElementTitle}>{title}</h2>
            <p className={styles.postElementDescription}>
                {shortDescription}
            </p>
        </article>
    )
};