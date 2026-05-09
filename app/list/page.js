import { connectDB } from '@/util/database';
import Link from 'next/link';
import React from 'react';
import DetailLink from './DetailLink';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum_2025');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map(({ title, date, _id }) => {
        return (
          <div className="list-item">
            <Link prefetch={false} key={_id.toString()} href={`/detail/${_id.toString()}`}>
              <h4>{title}</h4>
            </Link>
            <Link href={`/edit/${_id.toString()}`}>✏️</Link>
            <p>{date}</p>
          </div>
          //<DetailLink className="list-item" key={_id.toString()} href={`/detail/${_id.toString()}`} title={title} date={date} />
        );
      })}
    </div>
  );
}
