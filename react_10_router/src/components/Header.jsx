import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">home</Link>
        <br />
        <Link to="/board">게시판</Link>
        <br />
        <Link to="/profile">mypage</Link>
        <br />
        <Link to="/photos">Photos</Link>
        <br />
        <Link to="/products">ProductPage</Link>
      </nav>
    </header>
  );
}
