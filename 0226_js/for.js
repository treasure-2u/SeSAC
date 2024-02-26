console.log("connected!");

// 반복문 - for문
// 구조 : for(for문 내에서 사용할 변수 선언 및 초기화; 조건식(증감 범위); 변수의 증감 결정) {반복할 코드}
// (i += 1) = (i+1=i) = (i++) -> i를 1씩 더함

// 0부터 3씩 증가하는 반복문
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}

// 5부터 1씩 감소하는 반복문
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let r = 0;

for (let i = 0; i <= n; i++) {
  r += i;
}
console.log(r);

// 구구단 출력(이중for문)
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// 짝수인 구구단만 출력 (if문 + for문)
for (let i = 0; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (i != 0 && i % 2 === 0) console.log(`${i} X ${j} = ${i * j}`);
  }
}

// 입력한 숫자의 구구단만 출력
let dan = Number(prompt("출력을 원하는 구구단 숫자를 입력하시오: "));
for (let i = 0; i < 10; i++) {
  console.log(dan + " X " + i + " = " + dan * i);
}

// for문 + array
let cafe = ["americano", "latte", "espresso", "tea"]; // 배열의 길이 = 4!

for (let i = 0; i < cafe.length; i++) {
  console.log("cafe menu :", cafe[i]);
}

// 배열의 합 구하기
let nArr = [99, 88, 77, 66, 55];
let sum = 0;
for (let i = 0; i < nArr.length; i++) {
  sum += nArr[i];
}
console.log(sum);

// console.clear();
