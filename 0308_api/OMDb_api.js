// OMDb api 사용하여 영화 데이터 받아와 브라우저에 보여주기
async function getMovieData() {
  let word = prompt("search movie title");
  const h3 = document.querySelector("h3");
  h3.innerText = `검색된 키워드 : ${word}`;

  // fetch로 data 불러와서 변수에 담기
  const response = await fetch(
    `http://www.omdbapi.com/?i=뚱이&apikey=못맞췄지롱&s=${word}`
  );
  const movieData = await response.json(); // json 파씽 후에 동작하라
  console.log(movieData.Search);

  const ul = document.querySelector("ul");
  ul.innerText = ""; // 초기화

  // 불러온 데이터는 movieData.Search 배열 안에 각각의 객체로 존재, 반복문으로 각 요소를 생성 후 DOM에 추가
  for (let movie of movieData.Search) {
    const div = document.createElement("div"); // 영화 카드 컨테이너
    const img = document.createElement("img"); // 영화 포스터
    const p = document.createElement("p"); // 영화 제목

    img.src = movie.Poster;
    img.alt = movie.Title;
    p.innerText = movie.Title;
    div.append(img, p);
    ul.append(div);
  }
  // ul.innerText = ""; // 초기화 여기다 하면 결과물이 사라짐
}
