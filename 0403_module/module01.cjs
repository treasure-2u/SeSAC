// commonjs
// 한 번에 module.export로 내보내기

const colors = ["pink", "blue", "yellow"];

const sayhi = function () {
  console.log("hi!");
};

function sayName(name) {
  console.log("my name is" + name + "!");
  sayhi();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

module.exports = { colors, sayName, Person };
// 사용할 모듈들만 export하기, sayhi는 실행이 된다!
