import { getAuth, signOut } from '@firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LayoutNavBar } from '../components/layouts';
import createSubscription from '../stripe/createSubscription';
import usePremiumStatus from '../stripe/usePremiumStatus';
import HeaderPlatform from '../components/HeaderPlatform';
import styled from 'styled-components';

const UpgradeBtn = styled.button`
    background-color: #F72585;
    color: #FFF;
    padding: 12px 24px;
    border-radius: 16px;
    border: none;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`

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
                <UpgradeBtn onClick={goToCheckout}>Upgrade to premium!</UpgradeBtn>
                ):(
                    <h2>You{`'`}re a Premium customer!</h2>
                )
            }
        </div>
    );
}

Platform.layout = LayoutNavBar

export default Platform;