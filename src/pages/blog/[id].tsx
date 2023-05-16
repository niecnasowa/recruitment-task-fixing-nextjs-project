import React, { FC } from 'react';
import { Layout } from "../../components/layout";


const BlogPost: FC = () => {
    return (
        <Layout>
            Post
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

export default BlogPost;