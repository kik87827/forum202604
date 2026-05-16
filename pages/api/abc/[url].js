import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  const db = (await connectDB).db('forum_2025');
  let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.query.url) });
  console.log(result);
  return response.status(200).json('삭제완료');
  /*  let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.query) });
  return response.status(200).json('삭제완료'); */
}
