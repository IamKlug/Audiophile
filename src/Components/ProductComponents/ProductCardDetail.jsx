import { useState, useEffect, useContext } from "react";
import StateContext from "../StateContext";
import { useParams } from "react-router-dom";
import RecommendedProduct from "./RecommendedProduct";

export default function ProductCardDetail() {
  const { productList, cart, setCart, screenSize } = useContext(StateContext);
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    const getRandomProducts = () => {
      let randomProducts = [];
      let indexes = new Set();

      while (indexes.size < 3) {
        const randomIndex = Math.floor(Math.random() * productList.length);
        if (!indexes.has(randomIndex)) {
          indexes.add(randomIndex);
          randomProducts.push(productList[randomIndex]);
        }
      }
      return randomProducts;
    };
    setSelectedProduct(getRandomProducts());
  }, [productId, productList]);

  const product = productList.find((product) => product.id === productId);
  console.log("product Id");
  console.log(product);

  const handleAddToCart = () => {
    setCart((cart) => {
      // Check if the product is already in the cart
      const productExists = cart.find((item) => item.product.id === product.id);
  
      if (productExists) {
        // If product exists, just increment the quantity
        return cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: count }
            : item
        );
      } else {
        // If product doesn't exist, add it to the cart
        return [...cart, { product: product, quantity: count }];
      }
    });
  };
  

  return (
    <>
      <div className="columns">
        <div className="box column m-5 is-shadowless has-background-less-white">
          <img className="" src={product.imgProduct[screenSize]} alt="home" />
        </div>
        <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
          {product.isNewProduct && (
            <h3 className="is-text-subtext is-uppercase has-text-primary-orange mx-6">
              NEW PRODUCT
            </h3>
          )}
          <h1 className="is-uppercase title has-text-black m-5">
            {product.name}
          </h1>
          <p className="has-text-grey is-opacity-5 mx-5">
            {product.description}
          </p>
          <p className="has-text-black is-text-h6 m-5">${product.price}</p>
          <div className="is-flex is-justify-content-center ">
            <div className="is-flex is-align-items-center has-background-less-white">
              <button
                className="is-flex is-align-items-stretch has-background-less-white button-no-border p-3"
                onClick={() =>
                  setCount((count) => (count > 1 ? count - 1 : count))
                }
              >
                -
              </button>
              <div className="has-text-centered p-3">{count}</div>
              <button
                className="is-flex is-align-items-stretch has-background-less-white button-no-border p-3"
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="button has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless m-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <h1 className="is-uppercase is-text-h5 has-text-black mt-6 mx-5 pt-3">
        FEATURES
      </h1>
      <p className="has-text-grey is-opacity-5 mx-5">{product.features}</p>
      <h1 className="is-uppercase is-text-h5 has-text-black mt-6 mx-5 pt-3">
        IN THE BOX
      </h1>
      {product.inTheBox.map((item, idx) => (
        <div key={idx} className="is-flex mx-5 is-align-items-end">
          <h6 className="is-text-h6 has-text-primary-orange is-uppercase has-text-centered m-1">
            {item.quantity}x
          </h6>
          <p className="is-text-subtitle has-ocacity-5 mx-5">{item.name}</p>
        </div>
      ))}
      <div className="m-6"></div>
      <div className="is-flex is-flex-direction-column is-align-items-center">
        <div className="tile is-ancestor">
          <div className="tile is-5 is-vertical is-parent">
            <div key={0} className="tile is-child is-shadowless my-1 py-0">
              <img
                src={product.imageGallery[0].imgPath[screenSize]}
                alt="home"
              />
            </div>
            <div key={1} className="tile is-child is-shadowless my-1 py-0">
              <img
                src={product.imageGallery[1].imgPath[screenSize]}
                alt="home"
              />
            </div>
          </div>
          <div className="tile is-parent">
            <div key={2} className="tile is-child is-shadowless my-1 py-0">
              <img
                src={product.imageGallery[2].imgPath[screenSize]}
                alt="home"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="has-text-centered is-uppercase is-text-h5 has-text-black mx-5 pt-3">
        you may also like
      </h1>
      <div className="columns">
        {selectedProduct.map((product, index) => (
          <RecommendedProduct key={index} product={product} />
        ))}
      </div>
    </>
  );
}
