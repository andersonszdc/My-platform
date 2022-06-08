import { getAuth, sendPasswordResetEmail } from "@firebase/auth";
import React, { useState } from "react";
import firebaseApp from "../firebase/firebaseClient";
import { LayoutLogin } from "../layouts/loginLayout";
import styled from "styled-components";
import Link from "next/link";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";
import CustomInput from "../components/CustomInput";

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
    border: 1px solid #f72585;
    border-radius: 16px;
    padding: 12px;
    font-size: 12px;
    font-weight: 400;
    font-family: "Poppins";
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
    background-color: #f72585;
    color: #fff;
    padding: 12px 24px;
    border-radius: 16px;
    border: none;
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Forget = () => {
  firebaseApp;
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const submitEmail = (e: any) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsSend(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={submitEmail}>
        {!isSend && (
          <>
            <label className="form__label">Redefinir a senha</label>
            <CustomInput
              label="E-mail"
              onChange={handleEmail}
              value={email}
              type="email"
              icon="message"
            />
            <div className="form__actions">
              <div className="form__utilities">
                <CustomLink href="/">Voltar para o login</CustomLink>
              </div>
              <CustomButton>Enviar o e-mail</CustomButton>
            </div>
          </>
        )}
        {isSend && (
          <>
            <div>Email enviado!</div>
            <Link href="/">
              <a className="form__send">Voltar para o login</a>
            </Link>
          </>
        )}
      </form>
    </Wrapper>
  );
};

Forget.layout = LayoutLogin;

export default Forget;
