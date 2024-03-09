// open API 사용
// 고양이 사진 가져오기
fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json()) // = return response.json()
  .then((data) => {
    // console.log(data);
    const img = document.createElement("img");
    img.src = data[0].url; // 여러 사진 받을 시 대괄호 안으로 들어옴 // ex.30번째 사진 접근 = data[29].url
    img.setAttribute("width", 500); // = 500px

    document.querySelector("#cat").append(img);
  });
