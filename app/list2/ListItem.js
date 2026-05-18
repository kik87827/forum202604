'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export const revalidate = 20;

export default function ListItem({ result }) {
  /* useEffect(() => {
    // 서버에 부탁해서 DB게시물 가져옴
  }, []); */
  const [posts, setPosts] = useState(result);
  const router = useRouter();
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
              onClick={(e) => {
                /* fetch('/api/post/delete', { method: 'DELETE', body: _id })
                  .then((result) => {
                    return result.json();
                  })
                  .then((result) => {
                    // 성공시 실행할 코드

                    console.log(result);
                    e.target.parentElement.style.opacity = 0;
                    const parentDom = e.target.parentElement;
                    const parentDuration = getComputedStyle(parentDom).transitionDuration;
                    let setTimer = 0;

                    if (setTimer) {
                      clearTimeout(setTimer);
                    }
                    setTimer = setTimeout(
                      () => {
                        setPosts(posts.filter((item) => item._id !== _id));
                        //parentDom.style.display = 'none';
                        router.refresh();
                        console.log('삭제완료됨');
                      },
                      parseFloat(parentDuration) * 1000,
                    );
                  }); */
                /* fetch(`/api/post/delete2?id=${_id}`)
                  .then((result) => {
                    return result.json();
                  })
                  .then((result) => {
                    // 성공시 실행할 코드
                    e.target.parentElement.style.opacity = 0;
                    const parentDom = e.target.closest('.list-item');
                    const parentDuration = getComputedStyle(parentDom).transitionDuration;
                    let setTimer = 0;

                    setTimer = setTimeout(
                      () => {
                        setPosts((prev) => prev.filter((item) => item._id !== _id));
                        //parentDom.style.display = 'none';
                        router.refresh();
                        console.log('삭제완료됨');
                      },
                      parseFloat(parentDuration) * 1000,
                    );
                  }); */
                fetch(`/api/abc/${_id}`, { next: { revalidate: 60 } })
                  .then((result) => {
                    return result.json();
                  })
                  .then((result) => {
                    // 성공시 실행할 코드
                    e.target.parentElement.style.opacity = 0;
                    const parentDom = e.target.closest('.list-item');
                    const parentDuration = getComputedStyle(parentDom).transitionDuration;
                    let setTimer = 0;

                    setTimer = setTimeout(
                      () => {
                        setPosts((prev) => prev.filter((item) => item._id !== _id));
                        //parentDom.style.display = 'none';
                        router.refresh();
                        console.log('삭제완료됨');
                      },
                      parseFloat(parentDuration) * 1000,
                    );
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
