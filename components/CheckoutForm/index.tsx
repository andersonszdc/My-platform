import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { Wrapper } from "./styles";

const CheckoutForm: React.FC = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  if (!stripe || !elements) {
    return <div>Indisponível</div>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.origin}/sucess`,
      },
      redirect: "if_required",
    });
    if (paymentIntent.status == "succeeded") {
      router.push("/sucess");
    }
    if (error) {
      setMessage(error.message);
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <PaymentElement />
        <button className="form__btn" id="submit">
          Concluir
        </button>
        {message && <div id="error-message">{message}</div>}
      </form>
    </Wrapper>
  );
};

export default CheckoutForm;
