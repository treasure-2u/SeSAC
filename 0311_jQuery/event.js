// mouse 관련 이벤트
// click event(() => {}) method 인자 : 클릭 시 지정한 일 발생
$(".container").click((event) => {
  console.log("event", event); // event 객체
  console.log("event.target", event.target); // event가 발생한 요소 (자기 자신)
  //   $(".container").css({ "background-color": "skyblue" }); // click 시 bg-color change
  // 클릭되지 않은 요소도 바꿔줌(선택된 모든 요소 바꿔주기 때문)
  $(event.target).css({ "background-color": "skyblue" }); // 클릭된 요소에만 이벤트 적용
});

// mouseover&mouseout : nav bar에서 카테고리 같은 해당 요소가 올라가면 펼쳐져서 보이고, 마우스가 나가면 사라질 때 주로 사용
// mouseover event : 해당 요소에 마우스가 올라가면 이벤트 실행
$(".container").mouseover(() => {
  console.log("mouse over");
});

// mouseout event : 해당 요소에 마우스가 내려가면 이벤트 실행
$(".container").mouseout(() => {
  console.log("mouse out");
});

// hover event : css에서 주로 작성, mouseover, mouseout를 한 번에 지정(인자 method 2개 필요)
// 첫 번째 인자(콜백함수)는 mouseover, 두 번째 인자(콜백함수)는 mouseout일 때 실행할 코드 작성
$(".container").hover(
  (event) => {
    // mouseover일 때
    $(event.target).css({ "background-color": "yellow" });
  },
  (event) => {
    $(event.target).css({ "background-color": "pink" }); // 원래대로 돌아가는 것 있나? => 없음!!!!!
  }
);

$(document).scroll(() => {
  console.log("scrolled!");
});

// keyboard 이벤트
// keydown event: 선택한 요소에서 키보드를 누르는 이벤트가 발생한 경우(키값 입력되는 동안)
// 실시간 입력 처리 및 특수 키(ex. 화살표, enter키) 감지를 위해 사용
$("input[name=pw]").keydown((e) => {
  $(e.target).css({ color: "red" });
  //   console.log($("e.key"), e.key); // 입력된 값 하나씩 뱉음
  if (e.key === "Enter") {
    console.log(e.target.value); // 엔터 들어오면 여태 입력된 값 한 번에 알려줌
    $(e.target).val(""); // text는 요소가 아니기 때문에 empty가 안됐음!!!!!!!!!!!
  }
});

// keyup event : 선택한 요소에서 키보드를 떼는 이벤트가 발생한 경우 (== js addEventListener)
// 사용자가 입력을 완료하거나 특정 키를 눌렀다 뗄 때 필요한 동작 처리에 사용
$("input[name=pw]").on("keyup", (e) => {
  if (e.key === "Enter") {
    console.log(e.target.value);
  }
});

// 버튼을 누르면 비밀번호가 보여지는 자체 궁금증 이벤트
$(".btn").click(() => {
  $("input[name=pw]").attr("type", "text");
});

// 버튼을 누르면 비밀번호가 보여지는 이벤트 만들고 싶었음 아래는 실패 코드
// function lookPw() {
//   $("input[name=pw]").keyup((e) => {
//     if (
//       $(".btn").click((e) => { // 클릭 값 true로 받아오기
//         let btnClick = true;
//       })
//     )
//       e.target.value;
//   });
// }
