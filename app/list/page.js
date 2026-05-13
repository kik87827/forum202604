import { connectDB } from '@/util/database';
import Link from 'next/link';
import React from 'react';
import DetailLink from './DetailLink';
import ListItem from './ListItem';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum_2025');
  let result = await db.collection('post').find().toArray();
  const posts = result.map((post) => ({
    _id: post._id.toString(),
    title: post.title,
    content: post.content,
    date: post.date,
  }));
  return (
    <div className="list-bg">
      <ListItem result={posts} />
    </div>
  );
}
