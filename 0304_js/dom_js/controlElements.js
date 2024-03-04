// 1. tag inside content 다루기
// -innerText : 요소 안의 텍스트를 가져오거나 입력된 문자열 수정
// -innerHTML : 요소 안의 code를 가져오거나 code 수정

let div1 = document.getElementById("div1");
console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerText = "first div tag : js에서 innerText로 수정 완료"; // 해당 요소 내부의 text 변경
div1.innerText = "first div tag : <strong>js에서 innerText로 수정</strong>실패"; // 해당 요소 내부 tag 적용 안됨
div1.innerHTML = "first div tag : innerHTML로 수정 완료";
div1.innerHTML = "first div tag : <strong>js에서 innerText로 수정</strong>완료"; // 해당 요소 내부 tag 적용 됨

div1.innerHTML = "<ul><li>1</li><li>2</li><li>3</li></ul>";
// innerText, innerHTML은 불필요하게 남는 공백을 자체적으로 제거(수정)

// 2. 속성 접근
// 요소 속성 수정(변경) : 요소.setAttribute("속성명", "속성값")
// 요소 속성 가져오기 : 요소.getAttribute("속성명")

let naver = document.getElementById("naver");
console.log(naver);
console.log(naver.getAttribute("href")); // a tag의 href 속성값 가져오기

let imgEl = document.getElementById("beach");
console.log(imgEl.getAttribute("src")); // = console.log(imgEl.src); -> 점 접근법

// 속성 수정
naver.setAttribute("href", "http://www.google.co.kr");
imgEl.setAttribute("src", "./img/beach2.jpg");

naver.href = "https://www.op.gg/"; // 점 접근법

// 3. 스타일 변경
let flowers = document.querySelectorAll("#flowers li");
for (let li of flowers) {
  // li.style.backgroundColor = "greenyellow"; // 자동완성 되지 않기 때문에 따로 style 만들어서 추가함
  // li.style.color = "green";
  li.classList.add("liStyle"); // 원하는 class add
}

console.log(flowers[0].classList); // 원하는 class list 가져오기
flowers[0].classList.remove("liStyle"); // 원하는 class remove

console.log(flowers[0].classList.contains("liStyle")); // 해당 class 존재 유무 boolean type으로 반환
console.log(flowers[0].classList.contains("pink")); // 조건문에서 주로 사용됨 // true

// class toggle -> 해당 클래스 존재하면 제거, 없으면 추가
flowers[0].classList.toggle("liStyle");
flowers[1].classList.toggle("liStyle");

// 4. 부(모)자(식) 노드
const parentEl = document.querySelector("#flowers"); // ul
const childEl = document.querySelector("#flowers .pink"); // ul > li.pink

// 자식 노드 접근하기
console.log(parentEl.children); // ul의 자식 li들 유사배열로 불러옴 => querySelectorAll이랑 비슷
console.log(parentEl.children[2]); // 자식 요소에 배열 접근 방식으로 호출 가능

// 부모 노드 접근하기
console.log(childEl.parentNode); // 요소 자체에 접근
// console.log(parentEl.parentNode); // = body 전체 요소

// 형제 노드 접근하기
console.log(childEl.previousElementSibling); // 위의 노드 접근 // 앞 형제 요소 없어서 null 반환
// 자식 요소.부모 요소.자식 요소[인덱스] 로 접근도 가능하기는 하지만 좋은 방법은 아님
childEl.nextElementSibling; // 아래 노드 접근

// 요소 생성, 추가, 삭제
const container = document.querySelector(".container");

const pEl = document.createElement("p");
pEl.innerHTML = "new p tag"; // text 추가
pEl.style.fontSize = "30px"; // 폰트사이즈 추가
pEl.id = "append-p"; // 아이디 추가

console.log(pEl); // 유령

// pEl 요소 html에 삽입
// append : 선택된 요소의 자식 요소로 매개변수 요소가 삽입됨
// createElement를 사용해 만든 요소 -> 삽입 한 번만 적용됨 // 생성된 요소 갯수만큼만 출력
container.append(pEl);

const pEl2 = document.createElement("p");
pEl2.innerHTML = "new 2nd p tag";
container.append(pEl2); // 마지막 자식 요소로 추가됨

container.append(pEl, pEl2); // 여러 자식요소도 한 번에 삽입 가능

// 동일한 이름의 div 3개 만들기
for (let i = 0; i < 3; i++) {
  const hi = document.createElement("div");
  hi.innerText = "hi";
  container.append(hi);
}
