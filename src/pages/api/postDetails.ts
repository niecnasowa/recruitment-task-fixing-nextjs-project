import type { NextApiRequest, NextApiResponse } from 'next'
import postListMock, { PostT } from "../../data/postsListMock";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PostT | undefined>
) {
    const postId = Number(req.query.id);
    const postDetails = postListMock.find(el => el.id === postId);

    res.status(200).json(postDetails)
}
