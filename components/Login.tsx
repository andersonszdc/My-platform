import React, { useState } from 'react';
import firebaseApp, { db } from '../firebase/firebaseClient';
import { signInWithPopup, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'
import Link from 'next/link'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    .form {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: 100%;
        justify-content: center;
    }

    .form__label {
        font-size: 24px;
        font-weight: 600;
    }

    .form__input {
        border: 1px solid #F72585;
        border-radius: 16px;
        padding: 12px;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Poppins';
    }

    .form__actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 96px;
    }

    .form__utilities {
        display: flex;
        gap: 24px;
        font-size: 12px;
    }

    .form__send {
        background-color: #F72585;
        color: #FFF;
        padding: 12px 24px;
        border-radius: 16px;
        border: none;
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }

    .social {
        display: flex;
        justify-content: space-between;
    }

    .social__provider {
        display: flex;
        gap: 32px;
    }

    .social__provider button {
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 400;
        border: none;
        background: none;
        color: #F72585;
        cursor: pointer;
    }
`

const Login = () => {

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
        .then(() => {

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
        <Wrapper>
            <form className="form" onSubmit={signInWithEmail}>
                <label className="form__label">Login</label>
                <input className="form__input" type="text" name="email" onChange={handleChange} value={userData.email} placeholder="e-mail"/>
                <input className="form__input" type="password" autoComplete="current-password" name="password" onChange={handleChange} value={userData.password} placeholder="senha"/>
                <div className="form__actions">
                    <div className="form__utilities">
                        <Link href="/signUp">Criar conta</Link>
                        <Link href="/forget">Esqueci a senha</Link>
                    </div>
                    <button className="form__send">Entrar</button>
                </div>
                <div>{message}</div>
            </form>
            <div className="social">
                <span className="social__label">Login com</span>
                <div className="social__provider">
                    <button onClick={signInWithGoogle}>Facebook</button>
                    <button onClick={signInWithGoogle}>Google</button>
                </div>
            </div>
        </Wrapper>
    );
}

export default Login;