import React, { FC } from "react";
import Image from 'next/image';
import styles from './PostElement.module.sass';
import { PostT } from "../../../data/postsListMock";

export const PostElement: FC<PostT> = ({ title, category, author, shortDescription, date, image}) => {
    return (
        <article className={styles.postElement}>
            <Image src={image} alt={""} width={334} height={229} style={{ maxWidth: '100%', borderRadius: '10px', height: 'auto', objectFit: 'contain', position: 'relative' }} />
            <h2 className={styles.postElementTitle}>{title}</h2>
            <div className={styles.postElementLabelsContainer}>
                <span className={styles.postElementLabel}>
                    {category}
                </span>
                <span className={styles.postElementLabel}>
                    {author}
                </span>
                <span className={styles.postElementLabel}>
                    {date}
                </span>
            </div>
            <p className={styles.postElementDescription}>
                {shortDescription}
            </p>
        </article>
    )
};