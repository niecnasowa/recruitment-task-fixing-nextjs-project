import { PostCategory, Post } from '@/types/post';

export interface PostMock extends Omit<Post, 'date'> {
  date: Date;
}

const category: PostCategory = 'news';

const postMock = {
  title: 'Case Study',
  category,
  author: 'user',
  shortDescription:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  image: '/assets/placeholder.jpg',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis orci euismod, fermentum nisi in, tincidunt tortor. Quisque elementum leo vel lacinia suscipit. Quisque quis mauris sodales, consequat metus vitae, varius mauris. Integer nisl nulla, posuere et nulla eu, vehicula hendrerit ante. Pellentesque sagittis rhoncus metus, eu condimentum ex varius eget. Nunc accumsan sollicitudin aliquet. Quisque ut lacinia nisi, id bibendum ex. Curabitur rhoncus tincidunt pellentesque. Cras sit amet sapien in magna congue convallis non in velit. Nunc neque est, dictum nec velit nec, gravida cursus lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent ut libero metus.\n' +
    '<br/><br/>' +
    'Quisque at mollis velit, nec molestie ipsum. Sed cursus non magna sed laoreet. Duis quis gravida eros. Vestibulum convallis semper pellentesque. Nullam volutpat pharetra erat et cursus. Nullam ac lectus at est pellentesque rutrum non nec sem. Vestibulum vitae lobortis nisl. Curabitur eu tincidunt magna.\n' +
    '<br/><br/>' +
    'Duis rutrum sit amet nisi ut sollicitudin. Integer euismod volutpat pharetra. In sit amet metus scelerisque, varius odio et, auctor arcu. Suspendisse cursus pretium imperdiet. Suspendisse quis nisi est. Sed venenatis nibh diam, nec faucibus orci lacinia sit amet. Phasellus congue lacinia blandit. Duis metus nibh, fringilla ac tempus aliquet, rutrum vitae eros. Aenean quis dolor urna. Sed turpis urna, elementum eget justo ut, imperdiet semper lorem. Fusce nec mauris facilisis, aliquet nulla non, convallis risus. Aliquam tincidunt aliquam mi id commodo. Mauris mollis suscipit accumsan. Pellentesque dapibus urna eu orci sagittis sodales. Duis et odio porttitor, rhoncus nibh a, luctus metus. Curabitur tincidunt, turpis vitae fermentum tincidunt, nibh tortor dapibus sem, nec finibus sapien libero ac ex.',
};

export const postListMock: PostMock[] = [];

for (let iterator = 0; iterator < 5; iterator++) {
  postListMock.push({
    ...postMock,
    id: `${iterator}`,
    date: new Date(2023, 1, iterator),
  });
}

export interface PostListResponseMock {
  title: string;
  posts: PostMock[];
}

export const postListResponseMock = {
  title: 'Check our latest Posts',
  posts: postListMock,
};
