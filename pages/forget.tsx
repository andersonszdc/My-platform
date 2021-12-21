import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import React, { useState } from 'react';
import firebaseApp from '../firebase/firebaseClient';
import { useRouter } from 'next/router';
import { LayoutLogin } from '../components/layouts';
import styled from 'styled-components';
import Link from 'next/link';

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
`

const Forget = () => {

  firebaseApp
  const route = useRouter()
  const auth = getAuth()
  const [email, setEmail] = useState('')
  const [isSend, setIsSend] = useState(false)

  const handleEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const submitEmail = (e: any) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsSend(true)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
      <Wrapper>
          <form className="form" onSubmit={submitEmail}>
            {!isSend && (
              <>
                <label className="form__label">Redefinir a senha</label>
                <input className="form__input" type="text" name="email" onChange={handleEmail} value={email} placeholder="e-mail" />
                <div className="form__actions">
                    <div className="form__utilities">
                      <Link href="/">Voltar para o login</Link>
                    </div>
                    <button className="form__send">Enviar o e-mail</button>
                </div>
              </>
            )}
            {isSend && (
              <>
                <div>Email enviado!</div>
                <Link href='/'>
                  <a className="form__send">Voltar para o login</a>
                </Link>
              </>
            )}
          </form>
      </Wrapper>
  );
}

Forget.layout = LayoutLogin

export default Forget;