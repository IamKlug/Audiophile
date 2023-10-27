import { Link } from "react-router-dom";
import { useContext} from "react";
import StateContext from "../StateContext";

export default function ProductCard(props) {
  const { screenSize } = useContext(StateContext);

  return (
    <>
    <div className="columns is-desktop">
      <div className="box column m-5 is-shadowless has-background-less-white">
        <img className="" src={props.imgPath[screenSize]} alt="home" />
      </div>
      <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      {props.isNewProduct && (
        <h3 className="is-text-subtext has-text-primary-orange has-text-centered is-uppercase ">
          NEW PRODUCT
        </h3>
      )}
      <h1 className="has-text-centered is-uppercase title has-text-black m-2">
        {props.name}
      </h1>
      <p className="has-text-centered has-text-black is-opacity-5 m-2">
        {props.description}
      </p>
      <Link to={`/ProductCardDetail/${props.id}`} className="is-flex">
        <button
          className="button is-flex is-flex-grow-1 has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless m-2"
        >
          See Product
        </button>
      </Link>
      </div>

      </div>
    </>
  );
}
