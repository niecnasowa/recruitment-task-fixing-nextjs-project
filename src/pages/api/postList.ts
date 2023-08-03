import type { NextApiRequest, NextApiResponse } from 'next';
import {
  postListResponseMock,
  PostListResponseMock,
} from '../../data/postsListMock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostListResponseMock>
) {
  res.status(200).json(postListResponseMock);
}
