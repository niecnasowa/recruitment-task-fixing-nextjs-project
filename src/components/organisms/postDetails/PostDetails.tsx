import React, { FC } from "react";
import styles from './PostDetails.module.sass'
import { PostT , dateFormat} from "../../../data/postsListMock";
import { Header } from "@/atoms/header/Header";
import { PostDescription } from "@/atoms/postDescription/PostDescription";
import Image from "next/image";
import { format } from 'date-fns';

interface PostDetailsPropsI {
    postDetails: PostT;
}

export const PostDetails: FC<PostDetailsPropsI> = ({ postDetails: { title, shortDescription, image, date}}) => {
    return (
        <section>
            <Header text={title} type="center" />
            <PostDescription text={shortDescription} type="center" extraStyle={styles.postDescriptionExtraStyle}/>
            <span className={styles.postDetailsDate}>
                {format(new Date(date), dateFormat)}
            </span>
            <Image src={image} alt={""} width={1020} height={703} style={{ maxWidth: '100%', borderRadius: '10px', height: 'auto', objectFit: 'contain', position: 'relative', margin: '0 auto', display: 'block' }} />
        </section>
    )
}