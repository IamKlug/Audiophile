import React from "react";
import StateContext from "../StateContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function CartModal() {
  const { cart, setCart, isCartOpen, setIsCartOpen } = useContext(StateContext);
  const navigate = useNavigate();

  // Decrement item quantity in the cart
  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
    });
  };

  // Increment item quantity in the cart
  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  return (
    <div
      className={`my-modal is-justify-content-end ${
        isCartOpen && "my-modal-active"
      }`}
    >
      <div
        className="my-modal-background"
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className="my-modal-content has-max-width-400 is-transform-y-below-nav">
        <div className="box my-modal-content-inner is-flex is-flex-direction-column">
          <div className="is-flex is-justify-content-space-between is-align-items-center m-2 mb-6">
            <p className="has-text-black is-text-h6 is-uppercase">
              Cart ({cart.length})
            </p>
            <p
              className="is-text-body has-text-gray is-underlined is-opacity-5 is-clickable"
              onClick={() => setCart([])}
            >
              Remove all
            </p>
          </div>
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="is-flex is-justify-content-space-between is-align-items-center m-2 mb-4"
            >
              <figure className="image is-48x48 mr-2">
                <img src={item.product.imgProduct.mobile} alt="home" />
              </figure>
              <div>
                <p className="is-text-body has-text-black has-text-weight-bold">
                  {item.product.name
                    .replace(/(Headphones|SPEAKER|WIRELESS EARPHONES)$/g, "")
                    .trim()}
                </p>
                <p className="is-text-subtitle has-text-grey is-opacity-5 ">
                  ${item.product.price}
                </p>
              </div>
              <div className="is-flex is-align-items-center has-background-less-white">
                <button
                  className="is-flex is-align-items-stretch has-background-less-white button-no-border p-3"
                  onClick={() => decrementQuantity(item.product.id)}
                >
                  -
                </button>
                <div className="has-text-centered has-text-black has-text-weight-semibold p-2">
                  {item.quantity}
                </div>
                <button
                  className="is-flex is-align-items-stretch has-background-less-white button-no-border p-3"
                  onClick={() => incrementQuantity(item.product.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <div className="is-flex is-justify-content-space-between is-align-items-center mx-2 my-5">
            <p className="is-text-body has-text-weight-bold">TOTAL</p>
            <p className="is-text-body has-text-black has-text-weight-bold">
              $
              {cart.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              )}
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/Checkout");
              setIsCartOpen(false);
            }}
            className="button is-flex is-flex-grow-1 has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless m-2"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
