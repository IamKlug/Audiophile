import { Link } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../StateContext";

export default function ProductCategoryCard({ imgPath, title }) {
  const { setIsMenuOpen } = useContext(StateContext);
  function handleClick() {
    setIsMenuOpen(false);
  }

  return (
    <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center ">
      <figure className="image is-128x128 is-transform-y-50">
        <img className="" src={`${imgPath}`} />
      </figure>
      <div className="box is-flex is-flex-direction-column is-flex-grow-1 is-width-9 has-background-less-white p-6">
        <h6 className="is-text-h6 has-text-black is-uppercase has-text-centered m-1">
          {title}
        </h6>
        <div className="is-flex is-justify-content-center is-align-items-center">
          <Link
            to={`/ProductCategoryPage/${title}`}
            onClick={handleClick}
            className="is-text-subtitle is-uppercase has-text-centered has-text-black has-ocacity-5 mr-2"
          >
            shop
          </Link>
          <img src="assets/shared/desktop/icon-arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}
