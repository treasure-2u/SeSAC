// query 가져오는 useSearchParams 사용
// 라우팅 경로 따로 추가 안해도 됨

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false); // light mode가 기본 설정 되도록

  console.log(queryParams.get("mode"));
  // / -> null
  // /?mode=dark -> dark  (콘솔에서 값 확인)

  const toggleMode = () => {
    // isDark가 true라면 다크모드(?mode=dark) 주소로 바꿔줌
    // isDark가 False라면 일반모드(주소가 원래 주소로 돌아오면 됨)객체 형태로 전달
    // 조건문보다 logic 간편하고 빠른 동작을 위해 boolean type으로 작성
    setQueryParams(isDark ? {} : { mode: "dark" });
    setIsDark(!isDark);
  };

  return (
    <>
      <h1>Home</h1>
      <div style={isDark ? { backgroundColor: "#000", color: "#fff" } : {}}>
        현재 모드 : {isDark ? "dark mode" : "light mode"}
      </div>
      <button onClick={toggleMode}>Mode change</button>
    </>
  );
}
