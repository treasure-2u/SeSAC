class House {
  // constructor : 생성자 함수(클래스 속성 초기화)
  constructor(name, age, window) {
    this.name = name; // 이 클래스에는 name이라는 key, 생성자 함수에서 전달받은 name이 value
    this.age = age;
    this.window = window;
  }
  // 메서드
  consoleInfo() {
    console.log(`this apart name is ${this.age}'s ${this.name} apart.`);
  }

  consoleWindow() {
    console.log(`${this.name} apart's window : ${this.window}`);
  }
}

const house1 = new House("gangil riverpark", 2019, 1);
const house2 = new House("goduck grasium", 2019, 10);
const house3 = new House("goduck rienpark", 2010, 5);
const house4 = new House("goduck raemian", 2019, 8);
console.log(house1);
console.log(typeof house1);
house1.consoleInfo();

// 상속
class Apartment extends House {
  constructor(name, age, window, floor, password) {
    super(name, age, window); // super: 인자로 작성된 부모의 속성 상속 받아라
    this.floor = floor; // apartment class에서 사용할 속성
    this.password = password;
  }

  consolePw() {
    console.log(`this apartment password is ${this.password}.`);
  }

  // 오버라이딩 : 기존 메서드를 재정의
  consoleWindow() {
    console.log(
      `this apartment window is ${this.window}, floor is ${
        this.floor
      }. all window => ${this.window * this.floor}`
    );
  }
}

const apt1 = new Apartment("Ipark", 2017, 6, 20, 123456);
console.log(apt1);
apt1.consoleWindow(); // 새롭게 정의된 메서드 사용
apt1.consolePw(); // 새로운 메서드 추가 가능
apt1.consoleInfo(); // 부모 메서드 그대로 사용 가능

// 실습
class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 실습2
class Circle extends Shape {
  constructor(w, h, r) {
    super(w, h);
    this.r = r;
  }
  getArea() {
    return (this.w / 2) ** 2 * this.r;
  }
}

const cir = new Circle(5, 5, 3.14);
console.log(cir.getArea());
