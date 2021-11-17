import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import React, { useState } from 'react';
import firebaseApp from '../firebase/firebaseClient';
import { useRouter } from 'next/router';

const Forget: React.FC = () => {

  firebaseApp
  const route = useRouter()
  const auth = getAuth()
  const [email, setEmail] = useState('')

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const submitEmail = (e: any) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
    .then(() => {
      route.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
      <div>
          <form onSubmit={submitEmail}>
            <label htmlFor="">Digite seu e-mail</label>
            <input type="text" name="email" onChange={handleEmail} value={email} placeholder="e-mail" />
            <input type="submit" value="Enviar e-mail" />
          </form>
      </div>
  );
}

export default Forget;