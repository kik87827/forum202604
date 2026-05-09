import React from 'react';

export default function handler() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="/api/member/data" method="POST">
        <input name="userid" placeholder="아이디" />
        <input name="userpw" placeholder="비밀번호" />
        <button type="submit">가입</button>
      </form>
    </div>
  );
}
