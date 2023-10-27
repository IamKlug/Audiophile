import StateContext from "./StateContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useContext(StateContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleContinueAndPay = (e) => {
    e.preventDefault();
    setIsMenuOpen(true);
  };
  return (
    <>
      <div
        className={`modal ${
          isMenuOpen && "is-active"
        }`}
      >
        <div
          className="modal-background"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="modal-content my-6 py-4">
          <div className="box is-flex is-flex-direction-column m-3">
            <svg className="my-4" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
            <h1 className="is-uppercase title has-text-black">Thank you for the Order</h1>
            <p className="has-text-black is-opacity-5 m-2">
              You will receive an email confirmation shortly.
            </p>
            <div className="box is-shadowless">
              <div className="has-background-less-white m-0">
                  {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="is-flex is-justify-content-space-between is-align-items-center p-3 m-2 mb-4"
                  >
                  <div className="is-flex is-align-items-center">
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
                  </div>
                  <p className="is-text-subtitle has-text-grey is-opacity-5">
                    x{item.quantity}
                  </p>
                </div>
                ))}
              </div>

              <div className="is-flex is-flex-direction-column is-justify-content-space-between has-background-black is-rounded-8px p-3 m-0">
                <p className="is-text-body has-text-white has-ocacity-5">GRAND TOTAL</p>
                <p className="is-text-body has-text-white has-text-weight-bold">
                  $
                  {cart.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                  )}
                </p>
              </div>
              </div>

            <button className="button is-flex is-flex-grow-1 has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless p-5 my-4"
                onClick={() => navigate('/')}>
            Back to home
            </button>
          </div>
        </div>
      </div>
      <form onSubmit={handleContinueAndPay} action="" method="post">
        <p className="is-text-body has-text-grey is-opacity-5 is-clickable m-3"
        onClick={() => navigate(-1)}>
          Go Back
        </p>
        <div className="box is-shadowless is-flex is-flex-direction-column m-3">
          <h1 className="is-uppercase title has-text-black m-5">Checkout</h1>
          <h6 className="is-text-subtitle has-text-primary-orange is-uppercase mb-3">
            Billing Details
          </h6>
          <label className="label is-text-label">Name</label>
          <input className="input mb-2" type="text" placeholder="Alexei Ward" />
          <label className="label is-text-label">Email Address</label>
          <input
            className="input mb-2"
            type="text"
            placeholder="alexei@mail.com"
          />
          <label className="label is-text-label">Phone Number</label>
          <input
            className="input mb-2"
            type="text"
            placeholder="+1 202-555-0136"
          />
          <h6 className="is-text-subtitle has-text-primary-orange is-uppercase mb-3">
            Shiping Info
          </h6>
          <label className="label is-text-label">Your Address</label>
          <input
            className="input mb-2"
            type="text"
            placeholder="1137 Williams Avenue"
          />
          <label className="label is-text-label">ZIP Code</label>
          <input className="input mb-2" type="text" placeholder="10001" />
          <label className="label is-text-label">City</label>
          <input className="input mb-2" type="text" placeholder="New York" />
          <label className="label is-text-label">Country</label>
          <input
            className="input mb-2"
            type="text"
            placeholder="United States"
          />
          <h6 className="is-text-subtitle has-text-primary-orange is-uppercase mb-3">
            Payment Details
          </h6>
          <div className="control is-flex is-flex-direction-column">
            <label className="radio box is-shadowless m-0">
              <input type="radio" name="answer" />
              e-Money
            </label>
            <label className="radio box is-shadowless m-0">
              <input type="radio" name="answer" />
              Cash on Delivery
            </label>
          </div>
          <label className="label is-text-label">e-Money Number</label>
          <input className="input mb-2" type="text" placeholder="238521993" />
          <label className="label is-text-label">e-Money PIN</label>
          <input className="input mb-2" type="text" placeholder="6891" />
        </div>

        <div className="box is-shadowless is-flex is-flex-direction-column m-3 mb-6">
          <p className="has-text-black is-text-h6 is-uppercase m-4">Summary</p>
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="is-flex is-justify-content-space-between is-align-items-center m-2 mb-4"
            >
              <div className="is-flex is-align-items-center">
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
              </div>
              <p className="is-text-subtitle has-text-grey is-opacity-5">
                x{item.quantity}
              </p>
            </div>
          ))}
          <div className="is-flex is-justify-content-space-between is-align-items-center mx-2 my-1">
            <p className="is-text-body has-text-weight-bold">TOTAL</p>
            <p className="is-text-body has-text-black has-text-weight-bold">
              $
              {cart.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              )}
            </p>
          </div>
          <div className="is-flex is-justify-content-space-between is-align-items-center mx-2 my-1">
            <p className="is-text-body has-text-weight-bold">SHIPPING</p>
            <p className="is-text-body has-text-black has-text-weight-bold">
              $50
            </p>
          </div>
          <div className="is-flex is-justify-content-space-between is-align-items-center mx-2 my-1">
            <p className="is-text-body has-text-weight-bold">VAT</p>
            <p className="is-text-body has-text-black has-text-weight-bold">
              $
              {cart
                .reduce(
                  (acc, item) => acc + item.product.price * item.quantity * 0.2,
                  0
                )
                .toFixed()}
            </p>
          </div>
          <div className="is-flex is-justify-content-space-between is-align-items-center mx-2 my-4">
            <p className="is-text-body has-text-weight-bold">GRAND TOTAL</p>
            <p className="is-text-body has-text-primary-orange has-text-weight-bold">
              $
              {cart.reduce(
                (acc, item) => acc + item.product.price * item.quantity * 1.2 + 50 ,
                0
              ).toFixed()}
            </p>
          </div>
          <button className="button is-flex is-flex-grow-1 has-primary-orange-background is-uppercase has-primary-orange-background is-text-subtitle has-text-white is-shadowless my-4">
            Continue & Pay
          </button>
        </div>
      </form>
    </>
  );
}
