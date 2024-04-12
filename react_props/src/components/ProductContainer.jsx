import ProductItem from "./ProductItem";

export default function ProductContainer({ products }) {
  return (
    <div>
      {/* ? : data 들어오지 않는 경우를 대비해 사용, products라는 props가 전달되지
      않는 것 자체에 에러 발생하지 않지만 products 사용하는 순간 에러 발생 -> 오류 방지 위해 사용
      - 해당 props가 전달되었다면 체이닝된 메서드를 사용하고 아니라면 실행하지 않음
      - 아래 코드에서는 products라는 props가 전달되었다면 map 메서드를 사용해 products 배열으르 순회하면서 배열의 길이만큼 ProductItem을 브라우저에 렌더링하지만 products라는 props가 전달되지 않았다면 map 메서드 자체가 동작하지 않아 오류도 발생하지 않음
      */}

      {/* key : 기존 요소와 업데이트 요소를 비교할 때 사용하는 속성, 다른 요소와 겹쳐지지 않는 고유한 값 보유 필수
      - 배열의 요소 중 고유한 값(id) 없다면 **최후 수단**으로 index 사용
       */}
      {products?.map((prod) => {
        return <ProductItem prodData={prod} key={prod.id} />;
      })}
      {/* 위 코드랑 같은 의미! : 
      {products?.map((prod, index) => (
        <ProductItem prodData={prod} key={`prod_${index}`} />
      ))} */}
    </div>
  );
}
