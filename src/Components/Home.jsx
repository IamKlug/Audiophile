import { Link } from "react-router-dom";
import { useContext } from "react";
import StateContext from "./StateContext";

export default function Home() {
  const { screenSize } = useContext(StateContext);

  return (
    <>
      <div className="is-flex is-flex-direction-column is-justify-content-center is-relative is-align-items-center">
        <div className="image-container">
          <img
            className=""
            src={`assets/home/${screenSize}/image-header.jpg`}
            alt="home"
          />
        </div>
        <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center p-4 is-overlay">
          <h3 className="has-text-centered is-uppercase has-text-white has-ocacity-5">
            NEW PRODUCT
          </h3>
          <h1 className="has-text-centered is-uppercase title has-text-white">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="has-text-centered has-text-white m-3">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={`/ProductCardDetail/a1b2c3d4`} className="is-flex">
            <button className="button has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
