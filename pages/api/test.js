export default function handler(response, answer) {
  console.log(123);
  return answer.status(200).json('처리완료');
}
