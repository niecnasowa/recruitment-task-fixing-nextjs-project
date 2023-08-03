import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { PostDescription, ShowDate } from '@/components/atoms';
import { formatDate } from '@/helpers';
import { Post } from '@/types/post';
import styles from './PostPreview.module.sass';

type PostPreviewProps = Omit<Post, 'text'>;

export const PostPreview: FC<PostPreviewProps> = ({
  title,
  category,
  author,
  shortDescription,
  date,
  image,
  id,
}) => {
  return (
    <article className={styles.postPreview}>
      <Link href={`/blog/${id}`} className={styles.postPreviewLink}>
        <Image
          src={image}
          alt="Post image"
          width={344}
          height={241}
          className={styles.postPreviewImage}
          priority
        />
        <h2 className={styles.postPreviewTitle}>{title}</h2>
        <div className={styles.postPreviewLabelsContainer}>
          <span className={styles.postPreviewLabel}>{category}</span>
          <span className={styles.postPreviewLabel}>{author}</span>
          {/* Don't show on mobile */}
          <span className={cx(styles.postPreviewLabel, styles.hideOnMobile)}>
            {formatDate(date)}
          </span>
        </div>
        <PostDescription text={shortDescription} />
        {/* Show only on mobile */}
        <ShowDate date={date} extraClass={styles.postPreviewDateMobile} />
      </Link>
    </article>
  );
};
