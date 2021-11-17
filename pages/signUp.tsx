import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { doc, setDoc } from '@firebase/firestore';
import React, { useState } from 'react';
import firebaseApp, { db } from '../firebase/firebaseClient';

const SignUp: React.FC = () => {

    firebaseApp
    const auth = getAuth()
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
            console.log(user)
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: userData.nome,
                provider: user.providerData[0].providerId,
                photoUrl: user.photoURL
            })

        }).catch((error) => {
            setMessage(error.code)
        })
    }

    return (
        <div>
            <form onSubmit={createWithEmail}>
                <input type="text" onChange={handleChange} name="nome" value={userData.nome} placeholder="nome" />
                <input type="text" onChange={handleChange} name="email" value={userData.email} placeholder="e-mail" />
                <input type="password" onChange={handleChange} name="password" value={userData.password} placeholder="password" />
                <input type="submit" value="Criar" />
                {message && <div>{message}</div>}
            </form>
        </div>
    );
}

export default SignUp;