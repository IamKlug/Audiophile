import { useContext } from "react";
import StateContext from "../StateContext";

export default function About() {
  const { screenSize } = useContext(StateContext);

  return (
    <div className="columns is-desktop">
      <div className="box column is-flex is-flex-direction-column is-justify-content-center is-align-items-center has-background-white-bis is-shadowless mt-6">
        <img
          src={`/assets/shared/${screenSize}/image-best-gear.jpg`}
          alt="home"
        />
      </div>
      <div className="column is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <h1 className="has-text-centered is-uppercase title has-text-black m-2">
          Bringing you the best audio gear
        </h1>
        <p className="has-text-centered has-text-grey is-opacity-5 m-5">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
