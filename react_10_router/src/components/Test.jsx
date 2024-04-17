import { Link } from "react-router-dom";

export default function Test() {
  return (
    <>
      <a href="/">a tag 사용한 page 전환</a>
      <br />
      <Link to="/">Link component 사용한 page 전환</Link>
      <h1>Test page</h1>
    </>
  );
}
