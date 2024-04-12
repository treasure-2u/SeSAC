// import FuncProps from "./components/FuncProps";
// import ClassProps from "./components/ClassProps";
// import AnimalProps from "./components/AnimalProps";
import "./App.css";
import ProductContainer from "./components/ProductContainer";
// import BookList from "./components/PracProps";
// import ProductItem from "./components/ProductItem";

function App() {
  // const sayHi = () => {
  //   alert("sayHi!");
  // };

  // ProductItem.jsx list(book)
  // const books = [
  //   {
  //     id: 1,
  //     title: "나의 하루는 4시 30분에 시작된다",
  //     author: "김유진",
  //     price: "13,500",
  //     type: "자기계발서",
  //   },
  // ];

  // 연습 list
  const products = [
    {
      id: 1,
      name: "노트북",
      price: 1000000,
      image: "./img/laptop.jpg",
      description: "고성능 노트북입니다.",
    },
    {
      id: 2,
      name: "스마트폰",
      price: 800000,
      image: "./img/smartphone.jpg",
      description: "최신 스마트폰입니다.",
    },
    {
      id: 3,
      name: "유선키보드",
      price: 20000,
      image: "./img/keyboard.jpg",
      description: "유선 키보드입니다.",
    },
    {
      id: 4,
      name: "블루투스 키보드",
      price: 30000,
      image: "./img/bluetooth-keyboard.jpg",
      description: "사용이 편리한 무선 키보드입니다.",
    },
    {
      id: 5,
      name: "기계식 키보드",
      price: 180000,
      image: "./img/mechanical-keyboard.jpg",
      description: "소리가 매력적인 기계식 키보드입니다.",
    },
    {
      id: 6,
      name: "마우스",
      price: 50000,
      image: "./img/mouse.jpg",
      description: "편리한 이용이 가능한 마우스입니다.",
    },
    {
      id: 7,
      name: "게이밍 마우스",
      price: 80000,
      image: "./img/gaming-mouse.jpg",
      description: "게이밍용 마우스입니다.",
    },
    {
      id: 8,
      name: "32인치 모니터",
      price: 300000,
      image: "./img/monitor-32.jpg",
      description: "32인치의 모니터입니다.",
    },
    {
      id: 9,
      name: "20인치 모니터",
      price: 180000,
      image: "./img/monitor-20.jpg",
      description: "20인치의 키보드입니다.",
    },
  ];

  return (
    <div className="App">
      {/* <FuncProps weather="sunny" feeling="happy"></FuncProps> */}

      {/* defaultProps 사용 */}
      {/* <FuncProps feeling={true} /> */}

      {/* PropsTypes 사용 */}
      {/* props로 전달하는 값이 문자열인 경우에는 ""(따옴표)로 감싸 전달 */}
      {/* 이외의 데이터 타입은 { }(중괄호)로 감싸 전달 */}
      {/* <FuncProps feeling="boring" date="240402" /> */}

      {/* 문자열 전달 */}
      {/* <FuncProps>안녕?</FuncProps> */}

      {/* 함수 전달 */}
      {/* <FuncProps>{sayHi}</FuncProps> */}

      {/* 요소 전달 */}
      {/* <FuncProps>
        <div>hihi</div>
        <div>Are you sleeping?</div>
      </FuncProps> */}

      {/* class component에서의 props 사용 */}
      {/* <ClassProps drink="americano" payment="card" price={4000} /> */}

      {/* default props 사용 */}
      {/* <ClassProps drink="espresso" price="cash" /> */}

      {/* PropTypes 사용 */}
      {/* <ClassProps drink={15900} payment="cash" /> */}

      {/* isRequired 사용 */}
      {/* <ClassProps drink="lemonade" /> */}

      {/* 실습 */}
      {/* <AnimalProps
        animal="crestedgecko"
        reason="My crestedgecko name is curry. Curry is so small and very cute!"
      /> */}

      {/* 연습 => ProductItem.jsx 파일로 옮김 */}
      {/* {products.map((prod) => (
        <ProductList key={prod.id} prodData={prod} />
        ))}
      객체 하나를 요소로 전달, key값을 통해 같은 component일 때 순서표 붙여서 인식 높임, 데이터 효율적 관리 가능 */}

      {/* 연습 develop */}
      <ProductContainer products={products} />

      {/* book 실습 */}
      {/* {books.map((b) => (
        <BookList key={b.id} bookData={b} />
      ))} */}
    </div>
  );
}

export default App;
