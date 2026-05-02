'use client';

import { useRouter } from 'next/navigation';

export default function DetailLink({ href, title, date, className }) {
  let router = useRouter();

  return (
    <button
      className="list-item"
      onClick={() => {
        router.push(href);
        // router.back();
        // router.forward();
        // router.refresh();

        // router.prefetch('/detail'); 페이지 미리로드는 router.prefetch();
      }}
    >
      <h4>{title}</h4>
      <p>{date}</p>
    </button>
  );
}
