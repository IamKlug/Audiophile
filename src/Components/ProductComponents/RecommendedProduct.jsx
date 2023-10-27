import { useContext } from "react";
import StateContext from "../StateContext";
import { Link } from "react-router-dom";

export default function RecommendedProduct({ product }) {
  const { screenSize } = useContext(StateContext);

  return (
    <>
      <div className="column is-flex is-flex-direction-column is-align-items-center">
        <div className="is-flex is-justify-content-center is-width-9 mt-6 mx-5">
          <img className="" src={product.imgProduct[screenSize]} />
        </div>
        <p className="has-text-centered is-uppercase is-text-h5 has-text-black mt-3">
          {product.name
            .replace(/(Headphones|SPEAKER|WIRELESS EARPHONES)$/g, "")
            .trim()}
        </p>
        <Link to={`/ProductCardDetail/${product.id}`} className="is-flex">
          <button className="button is-flex is-flex-grow-1 has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless my-5">
            See Product
          </button>
        </Link>
      </div>
    </>
  );
}
