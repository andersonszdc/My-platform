import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    margin: 0 auto;
    width: 400px;
    .form {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
        background-color: white;
        width: 100%;
        border-radius: 16px;
    }
    .form__btn {
        background-color: #F72585;
        padding: 8px 24px;
        border-radius: 8px;
        border: none;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 500;
        color: white;
        cursor: pointer;
    }
    `

const CheckoutForm: React.FC = () => {

    const router = useRouter()
    const [message, setMessage] = useState('')

    const stripe = useStripe()
    const elements = useElements()

    if(!stripe || !elements) {
        return <div>Indisponível</div>;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.origin}/sucess`
            },
            redirect: 'if_required'
        });
        if (paymentIntent.status == 'succeeded') {
            router.push('/sucess')
        }
        if (error) {
            setMessage(error.message)
            return;
        }
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <PaymentElement />
                <button className="form__btn" id='submit'>Concluir</button>
                {message && <div id='error-message'>{message}</div>}
            </form>
        </Wrapper>
    );
}

export default CheckoutForm;