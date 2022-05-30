import { getAuth } from '@firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import cancelSubscription from '../stripe/cancelSubscription';

const Account = () => {
    const [user] = useAuthState(getAuth())
    const handleClick = (e: any) => {
        e.preventDefault()
        cancelSubscription(user.uid)
    }
    return (
        <div>
            <button onClick={handleClick}>Cancelar sub</button>
        </div>
    );
}

export default Account;