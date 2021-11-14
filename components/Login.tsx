import React from 'react';
import firebaseApp, { db } from '../firebase/firebaseClient';
import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'

const Login: React.FC = () => {

    firebaseApp
    const auth = getAuth()

    const signInWithGoogle = async () => {
        return signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
            
            const user = result.user
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                provider: user.providerData[0].providerId,
                photoUrl: user.photoURL
            })

        }).catch((error) => {
           console.log(error)
        })
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Login with Google</button>
        </div>
    );
}

export default Login;