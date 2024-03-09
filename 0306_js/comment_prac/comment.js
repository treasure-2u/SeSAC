/* function submitComment() {
  const userId = document.getElementById("userId").value;
  const content = document.getElementById("content").value;
  const ul = document.getElementsById("commentContainer");

  const li = document.createElement("li");
  li.innerText = `${userId} - ${content}`;
  ul.append(li);

  // input 초기화
  document.getElementById("userId").value = "";
  document.getElementById("content").value = "";
  // 변수에 담긴 값이라 원래 값 건들지 못해서 빈 문자열을 원래 값 지정하여 초기화
}
*/
function submitComment() {
  const ul = document.getElementById("commentContainer");
  const userId = document.getElementById("userId").value;
  const content = document.getElementById("content").value;

  const li = document.createElement("li");
  li.innerText = `${userId} - ${content}`;
  ul.append(li);

  // input창 초기화
  document.getElementById("userId").value = "";
  document.getElementById("content").value = "";
}
