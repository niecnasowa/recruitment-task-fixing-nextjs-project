import React, { FC } from "react";
import styles from './PostsList.module.sass';
import { PostListT } from "../../../data/postsListMock";
import {Header} from "@/atoms/header/Header";

interface PostsListI {
    header: string;
    postsList: PostListT;
}

export const PostList: FC<PostsListI> = ({ header, postsList}) => {
    return (
        <section>
            <Header text={header} />
        </section>
    )
}