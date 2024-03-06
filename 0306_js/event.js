const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-pink");
const btn3 = document.querySelector(".btn-gold");
const btn4 = document.querySelector(".btn-skyblue");
const container = document.querySelector(".container");

// addEventListener
// 하나의 요소에 여러 이벤트 등록 가능
// btn1 : 익명 함수, 함수 표현식 사용해 변수에 저장하지 않고 작성
btn1.addEventListener("click", function () {
  alert("1st button click!");
});

// mouseover : 마우스가 해당 요소 위에 올라갔을 때 실행 -> 마우스 떼도 해당 이벤트 계속 유지
// hover : 마우스가 해당 요소 위에 올라갔을 때만 실행 -> 마우스 떼면 해당 이벤트 효과 사라짐
btn1.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red"; // this : 선택된 요소 자신을 수정할 때 사용되는 키워드
});

// btn2 : 화살표 함수 사용하여 container에 요소 추가 (인자가 많을 때 주로 사용)
btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "yellowgreen";
  div.style.marginBottom = "10px";
  div.innerText = "2nd button click!";
  container.append(div);
});

// btn3 : 함수 선언해서 이벤트 등록 (같은 기능 재사용 필요 시 함수 선언 후 사용)
// addEventListener에서 함수를 불러올 때 () 작성 X -> 괄호 작성 시 지정한 이벤트가 아님에도 해당 함수를 바로 실행
// 만약 div 요소가 없다면 alert창으로 알려주는 것이 좋음
btn3.addEventListener("click", changeColor);
function changeColor() {
  let divs = document.querySelectorAll(".container div");

  if (divs.length !== 0) {
    for (let div of divs) div.style.color = "red";
    // 마지막 요소만 배경색 바꾸기
    divs[divs.length - 1].style.backgroundColor = "blue";
  } else alert("2nd button으로 div 생성 필요!");
}

// btn4 : 이벤트 적용된 함수-(자기 자신)을 선택하는 this 키워드 사용
btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  this.style.backgroundColor = "orange";
  this.style.color = "skyblue";
}

// click 이외의 다양한 이벤트들
// 매개변수 event
// scroll event는 브라우저 전체에 실행되는 이벤트기 때문에 요소(ex. document)가 아닌 window에 걸음
window.addEventListener("scroll", (event) => {
  console.log(event); // 무슨 이벤트인지 확인
  console.log(event.target); // event.target : 이벤트가 발생하는 요소(타겟) 알 수 있음
  console.log(scrollY); // 세로로 얼마만큼 scroll 되었는지 위치 알 수 있음
  if (scrollY > 700) {
    document.body.style.backgroundColor = "lightgray";
  }
});

// form event
const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");

// form이 제출되는 event
// submit => 제출 후 서버 새로고침하여 리로드함
todoForm.addEventListener("submit", (e) => {
  // submit의 브라우저 상의 기본 이벤트 동작 지우기
  e.preventDefault();
  console.log("submit");

  const todoInput = document.querySelector("input[name=todo]");
  console.log(todoInput);
  console.log(todoInput.value); // input 요소의 value를 가져옴
  // input 요소 자체의 value 수정 가능
  // todoInput.value = "짜잔";

  // input의 value 변수에 저장
  const todo = todoInput.value;

  // 만약 빈 문자열이 들어왔을 때 li로 추가하기 싫을 때
  if (todo !== "") {
    const newTodo = document.createElement("li");
    // newTodo.innerText = todo;
    newTodo.append(todo);
    todos.append(newTodo);
  }

  todoInput.value = "";
});

// change event(변경 이벤트)
const changeInput = document.querySelector("#change-input");
changeInput.addEventListener("change", () => {
  console.log("changed!");

  const div = document.querySelector(".change-input-value");
});
