import { getAuth, signOut } from '@firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { createCheckoutSession } from '../stripe/createCheckoutSession';
import usePremiumStatus from '../stripe/usePremiumStatus';

const Platform: React.FC = () => {

    const router = useRouter()
    const [user] = useAuthState(getAuth())
    const userIsPremium = usePremiumStatus(user)

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

    return user && (
        <div>
            <h1>Hello, {user.displayName}</h1>
            <button onClick={SignOut}>Sign out</button>
            {!userIsPremium? (
                <button onClick={() => createCheckoutSession(user.uid)}>Upgrade to premium!</button>
            ):(
                <h2>Have a cookie Premium customer!</h2>
            )}
        </div>
    );
}

export default Platform;