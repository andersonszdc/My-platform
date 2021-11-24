import { getAuth, signOut } from '@firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LayoutNavBar } from '../components/layouts';
import createSubscription from '../stripe/createSubscription';
import usePremiumStatus from '../stripe/usePremiumStatus';
import Modules from '../components/Modules';
import HeaderPlatform from '../components/HeaderPlatform';

const Platform = () => {

    const router = useRouter()
    const [user] = useAuthState(getAuth())
    const userIsPremium = usePremiumStatus(user)
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        !user && router.push('/')
    },[router, user])

    const goToCheckout = (e: any) => {
        e.preventDefault()
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
            <HeaderPlatform user={user} />
            {!userIsPremium? (
                <button onClick={goToCheckout}>Upgrade to premium!</button>
                ):(
                    <h2>Have a cookie Premium customer!</h2>
                )
            }
            <Modules />
        </div>
    );
}

Platform.layout = LayoutNavBar

export default Platform;