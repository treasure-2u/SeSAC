import { Routes, Route, Link } from "react-router-dom";
// import Test from "./components/Test";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotoPage from "./pages/PhotoPage";

function App() {
  return (
    <div className="App">
      <h1>routing</h1>

      {/* routing 연습
      <h1>routing</h1>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes> */}

      {/* routing 연습 2
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/board" element={<Board />} />
      <Route path="/board/1" element={<BoardDetail />} />
    </Routes> */}

      {/* 라우팅하기, /products /photos */}
      <Header />
      <ProductPage />
      <ProductDetailPage />
      <PhotoPage />
      <NotFound />

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/1" element={<BoardDetail />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/1" element={<ProductDetailPage />} />
        <Route path="/photos" element={<PhotoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
