import "./App.css";
import { useState, useEffect } from "react";
import StateContext from "./Components/StateContext.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./Components/Home.jsx";
import NavBar from "./Components/SharedSections/NavBar.jsx";
import CartModal from "./Components/Modals/CartModal";
import MenuModal from "./Components/Modals/MenuModal";
import ProductCategoryPage from "./Components/ProductComponents/ProductCategoryPage";
import ProductCategoryCard from "./Components/ProductComponents/ProductCategoryCard";
import ProductCardDetail from "./Components/ProductComponents/ProductCardDetail";
import Checkout from "./Components/Checkout";
import HomePageRecomendations from "./Components/ProductComponents/HomePageRecomendations";
import About from "./Components/SharedSections/About";
import Footer from "./Components/SharedSections/Footer";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]); // [{product: product, quantity: 1}, {product: product, quantity: 2}]
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(getScreenSize());

  console.log(cart);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function getScreenSize() {
    const width = window.innerWidth;
  
    if (width <= 768) {
      return 'mobile';
    } else if (width <= 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [screenSize]);


  return (
    <div className="is-flex is-flex-direction-column is-flex-grow-1 has-background-white-bis">
      <StateContext.Provider
        value={{
          productList,
          setProductList,
          cart,
          setCart,
          isCartOpen,
          setIsCartOpen,
          isMenuOpen,
          setIsMenuOpen,
          screenSize
        }}
      >
        <NavBar />
        <CartModal />
        <MenuModal />
        <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ProductCategoryPage/:category"
            element={<ProductCategoryPage />}
          />
          <Route
            path="/ProductCardDetail/:productId"
            element={<ProductCardDetail />}
          />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>

        {location.pathname !== "/Checkout" && (
          <>
          <div className="columns">
            <ProductCategoryCard
              imgPath="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              title="Headphones"
            />
            <ProductCategoryCard
              imgPath="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              title="Speakers"
            />
            <ProductCategoryCard
              imgPath="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              title="Earphones"
            />
            </div>
            {location.pathname === "/" && <HomePageRecomendations />}
            <About />
          </>
        )}
        </div>
        <Footer />
      </StateContext.Provider>
    </div>
  );
}

export default App;
