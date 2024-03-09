// 계산하기 button 함수
function calc() {
  const v1 = Number(document.querySelector("#value1").value);
  const v2 = Number(document.querySelector("#value2").value);
  const oper = document.querySelector("#operator").value;
  let result;

  if (oper === "+") result = v1 + v2;
  else if (oper === "-") result = v1 - v2;
  else if (oper === "*") result = v1 * v2;
  else if (oper === "/") result = v1 / v2;
  else result = "error";

  document.querySelector("#result").value = result;
  console.log(result); // .value : 값을 가져올 수도 있고 넣어줄 수도 있음
}

const calcBtn = document.querySelector("#calc");
// calcBtn.addEventListener("click", () => {});
// calc();
calcBtn.addEventListener("click", calc); // 17,18이랑 같은 코드
// addEventListener: 두 번째 인자에 함수 괄호 넣으면 멋대로 호출

// 초기화 button 함수
function reset() {
  document.querySelector("#value1").value = "";
  document.querySelector("#value2").value = "";
  document.querySelector("#operator").value = "";
  document.querySelector("#result").value = "";
}
