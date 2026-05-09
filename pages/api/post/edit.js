import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    let targetObj = { title: request.body.title, content: request.body.content };
    const db = (await connectDB).db('forum_2025');
    let result = await db.collection('post').updateOne({ _id: new ObjectId(request.body._id) }, { $set: targetObj });
    return response.status(200).redirect('/list');
  }
}
