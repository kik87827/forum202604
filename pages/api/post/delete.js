import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method === 'DELETE') {
    console.log(request.body);
    const db = (await connectDB).db('forum_2025');
    let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.body) });
    console.log(result);
    return response.status(200).json('삭제완료');
  }
}
