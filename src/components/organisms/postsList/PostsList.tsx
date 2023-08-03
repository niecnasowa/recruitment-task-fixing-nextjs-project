import React, { FC, useMemo } from 'react';
import styles from './PostsList.module.sass';
import { Title } from '@/components/atoms';
import { PostPreview } from '@/components/molecules';
import { Post } from '@/types/post';

interface PostsListProps {
  header: string;
  postsList: Post[];
}

export const PostList: FC<PostsListProps> = ({ header, postsList }) => {
  // Add useMemo to prevent recalculating value when is not needed
  const sortedPostsList = useMemo(
    () =>
      postsList.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      ),
    [postsList]
  );

  return (
    <section>
      <Title text={header} />
      <div className={styles.postList}>
        {sortedPostsList.map((postItem) => (
          <PostPreview key={postItem.id} {...postItem} />
        ))}
      </div>
    </section>
  );
};
