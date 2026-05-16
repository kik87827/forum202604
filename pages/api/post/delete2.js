import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  const db = (await connectDB).db('forum_2025');
  console.log(request.query);
  let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.query) });
  console.log(result);
  return response.status(200).json('삭제완료');
}
