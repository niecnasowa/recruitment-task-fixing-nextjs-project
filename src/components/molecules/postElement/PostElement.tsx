import React, { FC } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import styles from './PostElement.module.sass';
import { PostT, dateFormat } from "../../../data/postsListMock";


export const PostElement: FC<PostT> = ({ title, category, author, shortDescription, date, image, id}) => {
    return (
        <article className={styles.postElement}>
            <Link href={`/blog/${id}`}>
                <Image src={image} alt={""} width={334} height={229} style={{ maxWidth: '100%', borderRadius: '10px', height: 'auto', objectFit: 'contain', position: 'relative', margin: '0 auto', display: 'block' }} />
                <h2 className={styles.postElementTitle}>{title}</h2>
                <div className={styles.postElementLabelsContainer}>
                <span className={styles.postElementLabel}>
                    {category}
                </span>
                    <span className={styles.postElementLabel}>
                    {author}
                </span>
                    <span className={styles.postElementLabel}>
                    {format(new Date(date), dateFormat)}
                </span>
                </div>
                <p className={styles.postElementDescription}>
                    {shortDescription}
                </p>
            </Link>
        </article>
    )
};