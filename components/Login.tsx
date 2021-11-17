import React, { useState } from 'react';
import firebaseApp, { db } from '../firebase/firebaseClient';
import { signInWithPopup, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import Link from 'next/link'

const Login: React.FC = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')

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

    const signInWithEmail = async (e: any) => {
        e.preventDefault()
        return signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((result) => {

            setMessage('usuário logado')

        }).catch((error) => {
            setMessage(error.code)
        })
    }

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setUserData(s => ({
            ...s,
            [name]: value
        }))
    }

    return (
        <div>
            <form onSubmit={signInWithEmail}>
                <input type="text" name="email" onChange={handleChange} value={userData.email} placeholder="e-mail"/>
                <input type="password" name="password" onChange={handleChange} value={userData.password} placeholder="senha"/>
                <button>Entrar</button>
                <input type="submit" value="Entrar" />
                {message && <div>{message}</div>}
            </form>
            <Link href="/signUp">Criar conta</Link>
            <Link href="/forget">Esqueci a senha</Link>
            <button onClick={signInWithGoogle}>Login with Google</button>

        </div>
    );
}

export default Login;