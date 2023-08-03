export type PostCategory = 'news' | 'post';

export type Post = {
  title: string;
  category: PostCategory;
  author: string;
  shortDescription: string;
  id: string;
  date: string;
  image: string;
  text: string;
};
