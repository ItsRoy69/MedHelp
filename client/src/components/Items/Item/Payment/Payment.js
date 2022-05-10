import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
// ------------------------------------STYLING---------------------------------------------
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
    input: {
      float: "right",
      clear: "both",
    },
  },
};

export default function PaymentForm({ amount, itemStatus }) {
  const [address, setAddress] = useState("");
  const [payed, setPayed] = useState(0);
  const [success, setSuccess] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({
    status: true,
    msz: "",
  });
  const stripe = useStripe();
  const elements = useElements();
  const [items, setItems] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setItems(itemStatus.filter((item) => item.status === "ADDED"));
    setPayed(amount);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://pemjoy.herokuapp.com/payment",
          {
            amount: amount,
            id,
          }
        );

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
        setPaymentStatus({ status: true, msz: "" });
      }
    } else {
      console.log(error.message);
      setPaymentStatus({ status: false, msz: error.message });
    }
  };

  return (
    <>
      {!success ? (
        <>
          {paymentStatus.status === false ? (
            <>
              <h6 style={{ color: "red" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {paymentStatus.msz}!
              </h6>
            </>
          ) : (
            <></>
          )}

          <h3> &nbsp;&nbsp;&nbsp;Enter details here</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>

              <div className="col-sm-4">
                <div className="form-group">
                  <span>
                    <label htmlFor="address">Address </label>

                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </span>
                </div>
              </div>
            </fieldset>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-success">Pay</button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <div>
          <center>
            <h1 style={{ color: "green" }}>
              <b>Payment Successful</b> <i class="far fa-check-circle"></i>
            </h1>
          </center>
          <center>
            <h3>
              <b>
                amount Paid : <i class="fas fa-rupee-sign"></i> {payed} /-
              </b>
            </h3>
          </center>
          <center>
            <h3>
              <b>Items Purchased:</b>
            </h3>
          </center>
          <center>
            <h3>
              {items.map((item) => (
                <>
                  {item.name} {"  ,  "}
                </>
              ))}
            </h3>
          </center>
          <center>
            <h3>
              <b>delivery address: </b>
              {address}
            </h3>
          </center>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
}
