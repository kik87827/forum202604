'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ListItem({ result }) {
  /* useEffect(() => {
    // 서버에 부탁해서 DB게시물 가져옴
  }, []); */
  const [posts, setPosts] = useState(result);
  return (
    <>
      {posts.map(({ title, date, _id }) => {
        return (
          <div className="list-item" key={_id.toString()}>
            <Link prefetch={false} key={_id.toString()} href={`/detail/${_id.toString()}`}>
              <h4>{title}</h4>
            </Link>
            <button
              className="btn_ico"
              onClick={() => {
                fetch('/api/post/delete', {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ _id }),
                }).then(() => {
                  console.log('callback');
                  setPosts(posts.filter((post) => post._id !== _id));
                });
              }}
            >
              ❌
            </button>
            <Link href={`/edit/${_id.toString()}`}>✏️</Link>
            <p>{date}</p>
          </div>
          //<DetailLink className="list-item" key={_id.toString()} href={`/detail/${_id.toString()}`} title={title} date={date} />
        );
      })}
    </>
  );
}
