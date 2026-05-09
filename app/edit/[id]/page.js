import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit({ params }) {
  const db = (await connectDB).db('forum_2025');
  let { title, content, _id } = await db.collection('post').findOne({ _id: new ObjectId(params.id) });
  // await db.collection('post').updateOne({수정할게시물정보}, { $set : { title : '', content : ''}});
  console.log({ title, content });
  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="제목 작성" defaultValue={title} />
        <input name="content" placeholder="내용 작성" defaultValue={content} />
        <input style={{ display: 'none' }} name="_id" defaultValue={_id.toString()} />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
