export default function EventObj() {
  // event 함수를 만들어 event 객체 사용 시 event의 타입 지정 필수
  // 현재 event는 click event React.MouseEvent
  // event가 발생하는 요소는 button이라는 html요소 <HTMLElement>
  const buttonClick = (event: React.MouseEvent<HTMLElement>) => {
    alert(event.target);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.code); // 어디서 이벤트 실행됐는지 알려줌(keyboard key 알려줌)
    console.log(e.key);
  }; // HTMLInputElement가 값 변화 알아챌 수 있음

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h2>ts react에서 e 객체 타입</h2>
      <button onClick={() => alert("click!")}>event 객체 사용 안하기</button>
      <button onClick={(event) => alert(event.target)}>
        e객체 바로 사용하기
      </button>
      <button onClick={buttonClick}>함수 생성하여 event 객체 사용</button>

      {/* keyboard event */}
      <input type="text" onKeyDown={handleKeydown} />

      <input type="text" onKeyDown={handleChange} />
    </>
  );
}
