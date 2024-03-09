// json : data 전송을 위한 경량 데이터 포맷
// 여러 언어에서 쉽게 사용 가능하여 서버에서 json으로 통신
// [{
//     "name": "동물농장108호",
//     "level": 389,
//     "position": "sup",
//     "game": "league of legend",
//     "champion": { "sup": "janna", "top": "maokai" }
// }]

const jsonString =
  '{"name":"동물농장108호","level":389,"position":"sup","game":"league of legend","champion": {"sup":"janna","top":"maokai"}}';
console.log(jsonString.name); // js 객체처럼 사용 불가능

// json -> js 객체로 파싱하기
const obj = JSON.parse(jsonString);

console.log(obj);
console.log(obj.name);

// js 객체 -> json으로 파싱하기
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);
