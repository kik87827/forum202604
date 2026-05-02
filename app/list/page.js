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
          // <Link className="list-item" key={_id.toString()} href={`/detail/${_id.toString()}`}>
          //   <h4>{title}</h4>
          //   <p>{date}</p>
          // </Link>
          <DetailLink className="list-item" key={_id.toString()} href={`/detail/${_id.toString()}`} title={title} date={date} />
        );
      })}
    </div>
  );
}
