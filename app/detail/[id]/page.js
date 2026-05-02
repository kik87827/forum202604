import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react';

export default async function Detail({ params }) {
  const db = (await connectDB).db('forum_2025');
  let { title, content } = await db.collection('post').findOne({ _id: new ObjectId(params.id) });
  console.log(arguments);
  return (
    <div>
      <h4>상세페이지</h4>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}
