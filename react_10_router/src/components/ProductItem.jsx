import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ prod }) {
  return (
    <div>
      {/* localhost:3000/product/1 경로로 이동 */}
      {/* <Link to={"/products/" + prod.id}>상세페이지로 이동</Link> */}
      {/* react에서는 문자열 자체를 보낼 때("")를 제외하고서는 모두 중괄호에 작성 */}
      <Link to={prod.id}>상세페이지로 이동</Link>
      <div>상품명: {prod.name}</div>
      <div>상세설명: {prod.body}</div>
    </div>
  );
}
