// promise - 비동기 코드 처리 구현 예시
const id = prompt("input your id");
let userId;

const promise = new Promise((resolve, reject) => {
  console.log("promise ex");

  setTimeout(() => {
    userId = "modakbul"; // 서버에서 id 받아옴

    if (userId === id) resolve(userId);
    else reject(new Error("login 실패!")); // 에러창 만들어줌
  }, 2000);
});

promise
  .then((data) => console.log(`userId는 ${data}입니다.`))
  .catch((error) => console.log(error))
  .finally(() => console.log("Promise 종료"));
// . => method chaining 때문에 세미콜론(함수) 마지막에만 작성
