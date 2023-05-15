import { format } from 'date-fns';

type CategoryT = 'news' | 'post';

export type PostT = {
    title: string;
    category: CategoryT;
    author: string;
    shortDescription: string;
    id: number;
    date: string;
}

export type PostListT = PostT[];

const dateFormat = "dd MMM yyy";

const postMock = {
    title: 'Case Study',
    category: 'news' as CategoryT,
    author: 'user',
    shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
}

const postListMock: PostListT = [];

for (let iterator = 0; iterator < 5; iterator++) {

    postListMock.push(Object.assign(postMock, {
        id: iterator,
        date: format(new Date(2023, 1, iterator), dateFormat),
    }))
}

export default postListMock;