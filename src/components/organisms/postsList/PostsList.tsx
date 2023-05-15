import React, {FC} from "react";
import styles from './PostsList.module.sass';
import {PostListT} from "../../../data/postsListMock";
import {Header} from "@/atoms/header/Header";
import {PostElement} from "@/molecules/postElement/PostElement";

interface PostsListI {
    header: string;
    postsList: PostListT;
}

export const PostList: FC<PostsListI> = ({header, postsList}) => {
    const renderPostsList = () => postsList.map(({title, category, author, shortDescription, id, date}) => (
        <PostElement
            key={id}
            title={title}
            category={category}
            author={author}
            shortDescription={shortDescription}
            id={id}
            date={date}
        />
    ));

    return (
        <section>
            <Header text={header}/>
            <div className={styles.postList}>
                {renderPostsList()}
            </div>
        </section>
    )
}