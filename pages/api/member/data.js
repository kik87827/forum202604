import { connectDB } from '@/util/database';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    console.log(request.body);
    if (request.body.userid === '') {
      return response.status(500).json('아이디를 입력하세요');
    }
    if (request.body.userpw === '') {
      return response.status(500).json('비밀번호를 입력하세요');
    }
    try {
      const db = (await connectDB).db('members');
      let result = await db.collection('post').insertOne(request.body);
      return response.status(200).json('회원가입완료');
    } catch (error) {
      console.log(error);
    }
  }
}
