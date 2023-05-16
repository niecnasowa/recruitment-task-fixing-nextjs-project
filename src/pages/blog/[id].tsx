import React, { FC } from 'react';
import { GetServerSidePropsContext } from 'next';
import { Layout } from "../../components/layout";
import { PostT } from "../../data/postsListMock";

interface BlogPostPropsI {
    postDetails: PostT;
}

const BlogPost: FC<BlogPostPropsI> = () => {
    return (
        <Layout>
            Post
        </Layout>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    const response = await fetch(`http://localhost:3000/api/postDetails?id=${id}`);
    const postDetails = await response.json();

    return {
        props: {
            postDetails
        }
    };
}

export default BlogPost;