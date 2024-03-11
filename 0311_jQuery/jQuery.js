// jQuery
// $("css 선택자").동작함수(); -> jQuery 사용 위한 함수
// - $ : 식별자
// -$() : HTML 요소를 선택하는 함수
// 해당하는 모든 요소 선택 (== querySelectorAll)
// 여러개의 요소에 동일한 동작을 구현할 때 반복문으로 돌면서 지정할 필요 X
// 한 번에 여러 요소를 동시에 조작할 수 있음 ->  jquery 함수가 알아서 처리함

console.log($(".testSelector"));

// error 발생 코드지만 jQuery 사용 시 선택자가 기존 js 보다 짧아짐
// $(".testSelector").addEventListener("click", () => {
//   alert("click!");
// });

// document.querySelector(".testSelector").addEventListener("click", () => {
//   alert("click!");
// });

//////////////////
// 1. .val() : input의 값을 가져오기 & 수정하기 // 인자 빈칸 = 가져오기, 인자 넘겨주면 수정됨
// jQuery 사용ver
function useVal() {
  const value = $("input").val();
  console.log(value);

  $("input").val("수정할 값 작성하기");
}

// .val() js 사용ver
// function useVal() {
//   const value = document.querySelector("input").value = "수정할 값 작성하기";
//   console.log(value);
// }

// 2. .attr("속성", "속성값") : 요소의 속성을 추가, 수정, 가져오기
// jQuery ver // js - getAttribute, setAttribute
function useAttr() {
  $("input").attr("placeholder", "input element name"); // input 요소에 placeholder 속성 추가
  $("input").attr("type", "checkbox"); // type을 checkbox로 변경
  console.log($("input").attr("type")); // placeholder 속성 가져오기
}

// 3. text() : 요소의 content 중 text 가져오거나 수정 (js - innerText)
function useText() {
  console.log($("#sp").text()); // text 요소 가져오기
  $("#sp").text("text method로 수정");
}

// 4. html() : 요소의 content(html 형식)을 가져오거나 수정
function useHtml() {
  //   const spanVal = document.querySelector("#sp"); // js code
  console.log($("#sp").html());

  $("#sp").html("html()로 수정"); // span의 content(html) 수정하기
}

// 5. css() : css(style) 변경(수정)
function useCss() {
  const span = $("#sp");
  span.css({ color: "red", "font-size": "30px" });

  //   document.querySelector("#sp").style = "font-size: 30px;"; // js code
}

// 요소 추가, 삭제 메서드
// 6. append() : 선택된 요소의 마지막 자식 인자로 작성된 요소 추가/텍스트 작성 가능, html형식으로 작성 시 반영
function useAppend() {
  $(".container").append(`<div class="box red"></div>`); // .container 마지막 자식 요소 추가
}

// 7. prepend() : 선택된 요소의 첫번째 자식으로 인자에 작성된 요소 추가
function usePrepend() {
  $(".container").prepend(`<div class="box yellow"></div>`); // .container 마지막 자식 요소 추가
}

// 8. before() : 선택된 요소의 앞에 인자로 전달된 요소 추가
// .container 자식 요소 추가
function useBefore() {
  $(".red").before(`<div class="box orange"></div>`);
  // red라는 class를 가진 모든 요소의 앞에 div.orange 요소 추가(jQuery는 반복문 지정 없이 모든 요소에 지정됨)
  //   $(".container .red:first-child").before(`<div class="box orange"></div>`); // css 선택자로 특정 요소 선택 가능
}

// 9. after() : 선택된 요소의 뒤에 인자로 전달된 요소 추가
function useAfter() {
  $(".orange").after(`<div class="box yellow"></div>`); // orange box 요소 뒤에 생성
}

// 10. remove() : 선택된 요소 삭제
function useRemove() {
  $("#red").remove(); // id가 red인 요소 삭제
}

// 11. empty() : 선택된 요소의 모든 content(자식, 텍스트 모두) 삭제
function useEmpty() {
  $(".container").empty(); // class가 container인 요소의 content 삭제

  // document.querySelector(".container").innerHTML = ""; - js에는 empty 없음, 빈 문자열 삽입해 초기화
}

// 요소 탐색 메서드
function useElPC() {
  // 12. parent() : 직계 부모 요소 선택(=== js parentNode)
  console.log("parent", $("#red").parent());

  // 13. parents() : 부모, 조상 포함 모든 상위 요소 선택
  console.log("parents", $("#red").parents());

  // 14. next() : 자신의 다음 형제 요소 선택(=== js nextElementSibling)
  console.log("next", $("#red").next());

  // 15. prev() : 자신의 이전 형제 요소 선택(=== js previousElementSibling)
  console.log("prev", $(".container .box:nth-child(2)").prev());

  // 16. children() : 자신의 모든 자식 요소 선택(=== js children)
  console.log("children", $(".container").children());
}

const children = $(".container").children();
children.css({ "background-color": "yellow" });
// === $(".container").children().css({ "background-color": "yellow" });

// class 조작하기
// 17. addClass()
function controlClass() {
  $("#controlClass").addClass("red");
}

// 18. removeClass()
function removeClass() {
  $("#controlClass").removeClass("red");
  //   $("#controlClass").removeClass(); // 모든 class 제거
}

// 19. hasClass()
function hasClass() {
  console.log($("#controlClass").hasClass("red")); // class 포함 여부 t/f 반환
}

// 20. toggleClass()
function toggleClass() {
  $("#controlClass").toggleClass("red");
  //   document.querySelector("#controlClass").classList.toggle("red"); - js code
}
