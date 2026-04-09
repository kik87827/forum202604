import { connectDB } from '@/util/database';
import React from 'react'

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum_2025");
  let result = await db.collection('post').find().toArray();
  console.log('test')
  return (
    <div className="list-bg">
      {
        result.map(({ title, date, _id }) => {
          return (
            <div className="list-item" key={_id.toString()}>
              <h4>{title}</h4>
              <p>{date}</p>
            </div>
          )
        })
      }
    </div>
  )
}
