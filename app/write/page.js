export default function handler() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목 작성" />
        <input name="content" placeholder="내용 작성" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
