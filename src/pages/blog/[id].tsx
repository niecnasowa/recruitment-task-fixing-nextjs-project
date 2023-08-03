import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import { Post } from '@/types/post';
import { Layout } from '@/components/layout';
import { PostDetails } from '@/components/organisms';

interface BlogPostProps {
  postDetails: Post;
}

const BlogPost: FC<BlogPostProps> = ({ postDetails }) => {
  return (
    <Layout>
      <PostDetails postDetails={postDetails} />
    </Layout>
  );
};

const { CMS_API } = process.env;

export const getStaticPaths: GetStaticPaths = async () => {
  // Actually there is no need to try catch in that scenario, because if there will be problem with api return website will just not build
  const response = await fetch(`${CMS_API}/postList`);

  const { posts } = await response.json();

  const paths = posts.map((post: Post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

// Change it to getStaticProps from getServerSideProps
// Mostly there is no need to use server to get posts on every user requests
// can just rebuild project after something in posts change
// of course it depends what team decides
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Actually there is no need to try catch in that scenario, because if there will be problem with api return website will just not build
  const response = await fetch(`${CMS_API}/postDetails?id=${params?.id}`);

  const postDetails = await response.json();

  return {
    props: {
      postDetails,
    },
  };
};

export default BlogPost;
