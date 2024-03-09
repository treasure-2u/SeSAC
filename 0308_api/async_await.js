// async & await 사용
// Promise는 then을 체이닝 할 수 있으나 많아지면 가독성 떨어지기 때문에 이의 대안으로 나온 매서드(Promise와 비슷)
// async : 해당 함수 내부에 await을 사용할 것임을 알림
// await : 해당 함수가 실행될 때까지 기다리게 함

// try & catch : try{스코프}를 실행하며 어떤 에러나 문제가 발생하면 catch절로 이동, finally 사용 가능(무조건 실행)
const id = "modakbul";

const promiseFunc = () => {
  // Promise를 함수에 담아 해당 함수 호출
  return new Promise((res, rej) => {
    console.log("promise 시작");

    setTimeout(() => {
      userId = "modakbul";

      if (userId === id) res(userId);
      else rej(new Error("id error"));
    }, 2000); // 서버에서 데이터 받아오는 시간 대체
  });
};

const checkUserId = async () => {
  try {
    const result = await promiseFunc(); // 멈춰! 위 함수로 데이터 값 대조가 끝난 뒤에 해당 함수를 실행하라
    console.log(result);
  } catch (error) {
    // try에서 문제 발생하면 catch문 실행
    console.log(error);
  } finally {
    console.log("Promise 종료");
  }
};
