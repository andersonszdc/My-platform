import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

const Checkout: React.FC = () => {

    const router = useRouter()
    const [clientSecret] = useState(router.query.clientSecret as string)
    const [name, setName] = useState('anderson')
    const [message, setMessage] = useState('')
    const [paymentIntent, setPaymentIntent] = useState(null)

    const stripe = useStripe()
    const elements = useElements()

    if(!stripe || !elements) {
        return <div>Indisponível</div>;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const cardElement = elements.getElement(CardElement)

        const { error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    name: name,
                }
            }
        });

        if (error) {
            setMessage(error.message)
            return;
        }
        setPaymentIntent(paymentIntent)
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
        router.push('/platform')
    }

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
                backgroundColor: '#fff',
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: '500',
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#87BBFD',
                },
            },
            invalid: {
              iconColor: '#FFC7EE',
              color: '#FFC7EE',
            },
        },
    }

    return (
        <form onSubmit={handleSubmit}>

            <CardElement options={CARD_ELEMENT_OPTIONS} />

            <button id='submit'>Concluir</button>

            <div id='error-message'>{message}</div>
        </form>
    );
}

export default Checkout;