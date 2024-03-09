function displayProduct(product) {
  const productListEl = document.getElementById(product - list);
  productListEl.innerText = ""; // 상품 목록 초기화
  //   productListEl.innerHTML = ""; // 상품 목록 초기화

  productListEl.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <p>상품 이름 : ${product.name}, 가격 : ${product.price}원</p>`;

    productListEl.append(div);
  });
}

// json mock에 저장된 상품 데이터를 가져오는 함수
function fetchProducts() {
  fetch("./search_data.json")
    .then((response) => response.json())
    .then((data) =>
      //   console.log(data)
      displayProduct(data)
    )
    .catch((err) => console.log("상품 데이터 로드 실패"));
}

fetchProducts();
