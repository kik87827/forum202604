'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function DetailLink({ href, title, date, className }) {
  let router = useRouter();
  /* let pathname = usePathname(); // 현재 URL 출력
  let searchParams = useSearchParams(); // query string 전체 출력
  let dynamicRoute = useParams(); // 유저가 입력한거 출력[dynamic route] */

  return (
    <button
      className="list-item"
      onClick={() => {
        router.push(href);
        // router.back();
        // router.forward();
        // router.refresh(); 변동사항있는 일부분만 바꿔줌 : 소프트 리프레쉬

        // router.prefetch('/detail'); 페이지 미리로드는 router.prefetch();
      }}
    >
      <h4>{title}</h4>
      <p>{date}</p>
    </button>
  );
}
