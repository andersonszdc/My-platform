import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import React, { useState } from "react";
import { LayoutLogin } from "../layouts/loginLayout";
import firebaseApp, { db } from "../firebase/firebaseClient";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Portal from "../HOC/Portal";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";

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

  .social {
    display: flex;
    justify-content: space-between;
  }

  .social__provider {
    display: flex;
    gap: 32px;
  }

  .social__provider button {
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    border: none;
    background: none;
    color: #f72585;
    cursor: pointer;
  }
`;

const StatusMessage = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 1rem 4rem;
  border-radius: 1rem;
`;

const SignUp = () => {
  firebaseApp;
  const auth = getAuth();
  const router = useRouter();
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((s) => ({
      ...s,
      [name]: value,
    }));
  };

  const createWithEmail = async (e: any) => {
    e.preventDefault();
    return createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    )
      .then((result) => {
        const user = result.user;
        setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          name: userData.nome,
          provider: user.providerData[0].providerId,
          photoUrl: user.photoURL,
        });
        updateProfile(auth.currentUser, {
          displayName: userData.nome,
        }).then(() => {
          router.push("/platform");
        });
      })
      .catch((error) => {
        setMessage(error.code);
      });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={createWithEmail}>
        <label className="form__label">Criar conta</label>
        <CustomInput
          callback={handleChange}
          value={userData.nome}
          type="email"
        />
        <CustomInput
          callback={handleChange}
          value={userData.email}
          type="email"
        />
        <CustomInput
          callback={handleChange}
          value={userData.password}
          type="email"
        />
        <div className="form__actions">
          <div className="form__utilities">
            <CustomLink href="/">Voltar para o login</CustomLink>
          </div>
          <CustomButton>Criar</CustomButton>
        </div>
      </form>
      {message && (
        <Portal>
          <StatusMessage>{message}</StatusMessage>
        </Portal>
      )}
    </Wrapper>
  );
};

SignUp.layout = LayoutLogin;

export default SignUp;
