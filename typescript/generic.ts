// typescript 04
function printSomething<T>(x: T): T {
  console.log(x);
  return x;
}

printSomething<number>(1);
printSomething<string>("hello");

// 두 개의 다른 인자 받기
function getTwoParams<T, K>(x: T, y: K): void {
  console.log(x, y);
}

getTwoParams<number, string>(1, "2");
getTwoParams<string, number>("1", 2);
getTwoParams<null, boolean>(null, true);
getTwoParams<number[], string[]>([1, 2, 3], ["1", "2", "3"]);

// interface에서 generic
interface LoL<T> {
  name: string;
  tier: number;
  position: string;
  option: T;
}

const janna: LoL<number> = {
  name: "janna",
  tier: 2,
  position: "sup",
  option: 74568,
};

// generic으로 넘겨줄 T를 type으로 선언
type LolChampion = {
  remake: boolean;
};

const sona: LoL<LolChampion> = {
  name: "sona",
  tier: 4,
  position: "sup",
  option: {
    remake: true,
  },
};
