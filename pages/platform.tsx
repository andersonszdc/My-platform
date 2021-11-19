import { getAuth, signOut } from '@firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import createCheckoutSession from '../stripe/createCheckoutSession';
import createSubscription from '../stripe/createSubscription';
import usePremiumStatus from '../stripe/usePremiumStatus';

const Platform: React.FC = () => {

    const router = useRouter()
    const [user] = useAuthState(getAuth())
    const userIsPremium = usePremiumStatus(user)
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        !user && router.push('/')
    },[router, user])

    const SignOut = () => {
        signOut(getAuth())
        .then(() => {
            router.push('/')
        }).catch((error) => {
            console.log(error)
        })
    }

    const goToCheckout = (e: any) => {
        e.preventDefault()
        
        createCheckoutSession(user.uid)
        createSubscription(user.uid)
        .then((res) => {
            setClientSecret(res.latest_invoice.payment_intent.client_secret)
        })
    }

    if (clientSecret) {
        router.push({
            pathname: 'checkout',
            query: { clientSecret }
        }, '/checkout')
    }

    return user && (
        <div>
            <h1>Hello, {user.displayName}</h1>
            <button onClick={SignOut}>Sign out</button>
            {!userIsPremium? (
                <button onClick={goToCheckout}>Upgrade to premium!</button>
            ):(
                <h2>Have a cookie Premium customer!</h2>
            )}
        </div>
    );
}

export default Platform;