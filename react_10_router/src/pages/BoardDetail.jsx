import { useNavigate } from "react-router-dom";

export default function BoardDetail() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      {/* -1 : 이전 주소 돌아감 */}
      <button onClick={() => navigate("/board")}>게시판으로</button>
      <button onClick={() => navigate("/")}>홈으로</button>
      <h1>BoardDetail page</h1>
    </>
  );
}
