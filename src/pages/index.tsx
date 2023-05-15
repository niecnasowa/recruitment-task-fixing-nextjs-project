import React, { FC } from 'react';
import { Layout } from "../components/layout";
import { PostList } from "../components/organisms/postsList/PostsList";
import { PostListT, postListTitle } from "../data/postsListMock";

interface HomePropsI {
    postsList: PostListT;
}

const Home: FC<HomePropsI> = ({ postsList }) => {
  return (
    <Layout>
      <PostList header={postListTitle} postsList={postsList} />
    </Layout>
  )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/postList');
    const postsList = await response.json();

    return {
        props: {
            postsList
        }
    };
}

export default Home;