import book from "../assets/book.jpg";
import PropTypes from "prop-types";

export default function BookList({ bookData }) {
  return (
    <div className="book-container">
      <h2 className="titleStyle">이번주 베스트셀러</h2>
      <img src={book} alt="bookimage" />
      <h3>{bookData.title}</h3>
      <div className="introduceBook">저자: {bookData.author}</div>
      <div className="introduceBook">판매가: {bookData.price}원</div>
      <div className="introduceBook">구분: {bookData.type}</div>
    </div>
  );
}

BookList.defaultProps = {
  author: "저자",
  price: "판매가",
  type: "구분",
};

BookList.propTypes = {
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
