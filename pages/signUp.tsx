import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import { LayoutLogin } from '../components/layouts';
import firebaseApp, { db } from '../firebase/firebaseClient';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

const SignUp = () => {

    firebaseApp
    const auth = getAuth()
    const router = useRouter()
    const [userData, setUserData] = useState({
        nome: '',
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('')

    const handleChange = (e: any) => {
        const {name, value} = e.target
        setUserData((s) => ({
            ...s,
            [name]: value
        }))
    }

    const createWithEmail = async (e: any) => {
        e.preventDefault()
        return createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((result) => {
            const user = result.user
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: userData.nome,
                provider: user.providerData[0].providerId,
                photoUrl: user.photoURL
            })
            updateProfile(auth.currentUser, {
                displayName: userData.nome
            })
            .then(() => {
                router.push('/platform')
            })
        }).catch((error) => {
            setMessage(error.code)
        })
    }

    return (
        <Wrapper>
            <form className="form" onSubmit={createWithEmail}>
                <label className="form__label">Criar conta</label>
                <input className="form__input" type="text" onChange={handleChange} name="nome" value={userData.nome} placeholder="nome" />
                <input className="form__input" type="text" onChange={handleChange} name="email" value={userData.email} placeholder="e-mail" />
                <input className="form__input" type="password" onChange={handleChange} name="password" value={userData.password} placeholder="password" />
                <div className="form__actions">
                    <div className="form__utilities">
                        <Link href="/">Voltar para o login</Link>
                    </div>
                    <button className="form__send">Criar</button>
                </div>
                {message && <div>{message}</div>}
            </form>
        </Wrapper>
    );
}

SignUp.layout = LayoutLogin

export default SignUp;