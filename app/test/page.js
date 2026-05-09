import React from 'react';

export default function handler() {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
