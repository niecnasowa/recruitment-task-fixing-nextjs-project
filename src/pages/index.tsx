import React, { FC } from 'react';
import { Post } from '@/types/post';
import { Layout } from '@/components/layout';
import { PostList } from '@/components/organisms';
import { GetStaticProps } from 'next';

interface HomeProps {
  title: string;
  posts: Post[];
}

const Home: FC<HomeProps> = ({ title, posts }) => {
  return (
    <Layout>
      <PostList header={title} postsList={posts} />
    </Layout>
  );
};

const { CMS_API } = process.env;

// Change it to getStaticProps from getServerSideProps
// Mostly there is no need to use server to get posts on every user requests
// can just rebuild project after something in posts change
// of course it depends what team decides
export const getStaticProps: GetStaticProps = async () => {
  // Actually there is no need to try catch in that scenario, because if there will be problem with api return website will just not build
  const response = await fetch(`${CMS_API}/postList`);
  const { title, posts } = await response.json();

  return {
    props: {
      title,
      posts,
    },
  };
};

export default Home;
