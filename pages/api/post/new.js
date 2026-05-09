import { connectDB } from '@/util/database';

export default async function handler(response, answer) {
  if (response.method === 'POST') {
    console.log(response.body);
    if (response.body.title === '') {
      return answer.status(500).json('제목 입력하세요');
    }
    if (response.body.content === '') {
      return answer.status(500).json('내용 입력하세요');
    }
    try {
      const db = (await connectDB).db('forum_2025');
      let result = await db.collection('post').insertOne(response.body);
      return answer.status(200).redirect('/list');
    } catch (error) {
      console.log(error);
    }
  }
}
