import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./Payment";

const PUBLIC_KEY =
  "pk_test_51KBxFYSHohqxKKg7aD16c65NZLvOKeLPRwm0mgfLrn44j1EBBnmgSsWDpqJ8lhPer1eTbqnGyhAVjVJITauDC3Kp00IBdBeQhx";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ amount, itemStatus }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amount={amount} itemStatus={itemStatus} />
    </Elements>
  );
}
