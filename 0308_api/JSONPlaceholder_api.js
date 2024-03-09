// JSONPlaceholder API 사용해 가짜 데이터로 CRUD 작업하기
// JSONPlaceholder API : JSON 형태의 mock data(더미 데이터)를 주는 open API

// get 요청
// 특정 게시물을 가져오는 함수
const getPost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// post 요청
// 새로운 게시물 생성하는 함수
const postPost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: "제목",
      body: "게시물 내용",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8", // 무조건적인 시멘틱 구조
    },
  })
    .then((response) => response.json()) // return 생략 가능
    .then((data) => console.log(data))
    // 브라우저에 렌더링 등 응답으로 받은 데이터 사용
    .catch((err) => console.log("err: ", err));
  // 원하는 에러 처리 실행
};

const deletePost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log("Delete!"))
    .catch((err) => console.log("delete err: ", err));
};
