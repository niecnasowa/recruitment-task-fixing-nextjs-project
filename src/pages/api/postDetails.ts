import type { NextApiRequest, NextApiResponse } from 'next';
import { postListMock, PostMock } from '../../data/postsListMock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostMock | undefined>
) {
  const postId = req.query.id;
  const postDetails = postListMock.find((el) => el.id === postId);

  res.status(200).json(postDetails);
}
