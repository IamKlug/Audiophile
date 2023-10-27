import { Link } from "react-router-dom";
import { useContext } from "react";
import StateContext from "../StateContext";

export default function HomePageRecomendations() {
  const { screenSize } = useContext(StateContext);

  return (
    <div className="is-flex is-flex-direction-column is-align-items-center">
      <div className="p-3 m-6"></div>

      <div className="columns is-desktop has-primary-orange-background m-6">
        <div className="column is-flex is-justify-content-center px-6 m-5 is-shadowless has-primary-orange-background">
          <figure className="is-flex is-justify-content-center mx-6">
            <img
              className="has-primary-orange-background mx-6"
              src={`assets/home/${screenSize}/image-speaker-zx9.png`}
              alt="home"
            />
          </figure>
        </div>
        <div className="column is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
          <h1 className="has-text-centered is-uppercase title is-1 has-text-white mx-6">
            ZX9 SPEAKER
          </h1>
          <p className="is-text-body has-text-centered has-text-white is-opacity-75 m-2">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={`/ProductCardDetail/q7r8s9t0`} className="is-flex">
            <button className="button is-black is-flex is-flex-grow-1  is-uppercase is-text-subtitle has-text-white is-shadowless p-5 m-2">
              See Product
            </button>
          </Link>
        </div>
      </div>
      <div className="is-flex is-flex-direction-column is-justify-content-center is-relative is-align-items-center p-0 m-3">
        <div className="m-0 p-0">
          <img
            className="is-rounded-8px"
            src={`assets/home/${screenSize}/image-speaker-zx7.jpg`}
            alt="home"
          />
        </div>
        <div className="is-flex is-flex-direction-column is-justify-content-center p-4 is-overlay">
          <div className="mx-6">
            <h1 className="is-uppercase title is-2 has-text-black ">
              ZX7 SPEAKER
            </h1>
            <Link to={`/ProductCardDetail/m3n4o5p6`}>
              <button
                // onClick={handleClick}
                className="button is-outlined is-black is-uppercase is-text-subtitle has-text-black is-shadowless m-2"
              >
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="columns">
      <div className="column m-5 p-0">
        <img
          className="is-rounded-8px"
          src={`assets/home/${screenSize}/image-earphones-yx1.jpg`}
          alt="home"
        />
      </div>
      <div className=" column box has-background-less-white m-5 px-4 py-6 is-shadowless">
        <h1 className="is-uppercase title is-2 has-text-black ">
          YX1 EARPHONES
        </h1>
        <Link to={`/ProductCardDetail/u1v2w3x4`}>
          <button
            className="button is-outlined is-black is-uppercase is-text-subtitle has-text-black is-shadowless m-2"
          >
            See Product
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}
