// 요소 선텍
/* - querySelector('CSS 선택자'), querySelectorAll("css 선택자"), getElement.ById, getElementsByClass, getElementsByTagName*/

// document 객체
console.log(document); // html 문서 전체
console.log(document.documentElement); // html 문서 내의 모든 element(요소)들을 가짐
console.log(document.head); // head 태그와 내부 모든 elements
console.log(document.body); // body tag and all elements
console.log(document.URL); // (ip주소, 폴더명, 파일명) // html, www.. 전부 포함
console.log(document.domain); // ip address or domain

// 1. getElementById
console.log("getElemenetById");
console.log(document.getElementById("green"));
console.log(document.getElementById("gold"));
console.log(document.getElementById("green"));

// 2. getElementsByClassName
// 동일한 클래스를 가진 요소가 여러 개 가질 수 있으므로 elements(복수형)
console.log("getElementByClass");
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// 3. getElementsByTagName
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("div"));

// 4. querySelector
// css에서 사용했던 선택자 이용해 요소 선택
// 해당 css 선택자 중에서 일치하는 첫 번째 요소만 선택됨 -> 하나만 선택됨
console.log("querySelector");
console.log(document.querySelector("div"));

// 5. querySelectorAll
// 해당 css 선택자 중에서 일치하는 모든 요소 선택하여 배열 형태로 반환(유사배열)
console.log("querySelectorAll");
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div.pink"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div.pink")[2]); // 3번째 핑크 div 접근 가능

// for of 문으로 pink class 모두 print하기
let pinks = document.querySelectorAll(".pink");

for (let el of pinks) console.log(el);

// NodeList와 HTMLCollection
// getElemnetBy~ -> HTMLCollection -> js에서 node를 생성 및 제거와 같은 변경 감지
// querySelectorAll -> NodeList -> 변경 감지 불가
// HTMLCollection, NodeList -> 유사배열
// 유사배열? length 속성 O, [i] 같은 인덱스로 접근 가능, 표준 객체 메서드 사용 불가(ex. map, but forEach 가능)
