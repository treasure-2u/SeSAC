// 1. while문을 이용하여 10부터 1까지 홀수 출력
let num = 10;
while (num > 0) {
  if (num % 2 === 1) console.log(num);
  num--;
}

// 2. 0~100의 숫자 중에서 2 또는 5의 배수 총합 구하기
// 2-1. for문
let sum = 0;
for (let i = 0; i <= 100; i++) if (i % 2 === 0 || i % 5 === 0) sum += i;
console.log(sum);

// 2-2. while문
let n = 0;
sum = 0; // for문에서 사용한 변수라 재할당(초기화)
while (n <= 100) {
  if (n % 2 === 0 || n % 5 === 0) sum += n;
  n++;
}
console.log(sum);

// 3-1. 10000까지의 숫자 중에서 13의 배수면서 홀수인 숫자를 찾기
num = 0;
while (num <= 10000) {
  if (num % 13 === 0 && num % 2 === 1) console.log(num);
  num++;
}

// 3-2. prompt()를 이용해 입력받은 수까지 13의 배수면서 홀수인 수 찾기 프로그램
num = Number(prompt("13의 배수이면서 홀수를 찾아드립니다!"));
let i = 0;
while (i <= num) {
  if (i % 13 === 0 && i % 2 === 1) console.log(i);
  i++;
}

// 4. 1~100까지의 배열을 for문을 사용해서 만들고 합 구하기
// 4-1. for문으로 배열 만들기
// const numArr = [];
// for (let i = 1; i <= 100; i++) numArr.push(i);
const numArr = Array.from({ length: 100 }, (v, i) => i + 1);
console.log(`for문으로 구한 array : ${numArr}`);

// 4-2. for문 합 구하기
let arrSum = 0;
for (let i = 0; i < numArr.length; i++) arrSum += numArr[i];
console.log(`for문으로 구한 배열 요소의 합 : ${arrSum}`);

// 4-3. for of문 합 구하기
arrSum = 0;
for (let num of numArr) arrSum += num;
console.log(`for of문으로 구한 배열 요소의 합 : ${arrSum}`);

// 4-4. forEach문 합 구하기
arrSum = 0;
numArr.forEach((num) => (arrSum += num));
console.log(`forEach문으로 구한 배열 요소의 합 : ${arrSum}`);
