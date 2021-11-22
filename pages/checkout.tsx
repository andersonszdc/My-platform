import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

const Checkout: React.FC = () => {
    
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
    const router = useRouter()
    const [clientSecret] = useState(router.query.clientSecret as string)

  const appearance = {
    theme: 'stripe' as "stripe"
  }
  const options = {
    clientSecret,
    appearance
  }

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
}

export default Checkout;