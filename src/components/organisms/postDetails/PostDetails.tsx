import Image from 'next/image';
import React, { FC } from 'react';
import { Title, PostDescription, ShowDate } from '@/components/atoms';
import { Post } from '@/types/post';
import styles from './PostDetails.module.sass';

interface PostDetailsProps {
  postDetails: Post;
}

export const PostDetails: FC<PostDetailsProps> = ({
  postDetails: { title, shortDescription, image, date, text },
}) => {
  return (
    <section className={styles.postDetails}>
      <Title text={title} type="center" size="small" />
      <PostDescription
        text={shortDescription}
        type="center"
        extraClass={styles.postDescriptionExtraClass}
      />
      <ShowDate date={date} />
      <Image
        src={image}
        alt="Post image"
        width={1020}
        height={703}
        className={styles.postPreviewImage}
        priority
      />
      <PostDescription text={text} extraClass={styles.postTextExtraClass} />
    </section>
  );
};
