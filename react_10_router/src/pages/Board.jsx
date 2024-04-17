import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Board() {
  const navigation = useNavigate();

  return (
    <>
      <Header />
      <h1>Board Page</h1>
      <div
        onClick={() => {
          // navigation("/board/1");
          navigation("1");
        }}
      >
        1번 게시글 보러가기
      </div>
    </>
  );
}
