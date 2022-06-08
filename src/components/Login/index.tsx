import React, { useState } from "react";
import firebaseApp, { db } from "../../firebase/firebaseClient";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Portal from "../../HOC/Portal";
import { StatusMessage, Wrapper } from "./styles";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import CustomLink from "../CustomLink";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  firebaseApp;
  const auth = getAuth();

  const signInWithGoogle = async () => {
    return signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;
        setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          provider: user.providerData[0].providerId,
          photoUrl: user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInWithEmail = async (e: any) => {
    e.preventDefault();
    return signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
        setMessage("usuário logado");
      })
      .catch((error) => {
        setMessage(error.code);
      });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((s) => ({
      ...s,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={signInWithEmail}>
        <h1 className="form__label">Login</h1>
        <CustomInput
          label="E-mail"
          name="email"
          type="email"
          onChange={handleChange}
          value={userData.email}
          icon="message"
          placeholder="anderson@mail.com"
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={userData.password}
          icon="lock"
          placeholder="********"
        />
        <div className="form__actions">
          <div className="form__utilities">
            <CustomLink href="/signUp">Criar conta</CustomLink>
            <CustomLink href="/forget">Esqueci a senha</CustomLink>
          </div>
          <CustomButton>Entrar</CustomButton>
        </div>
      </form>
      <div className="social">
        <span className="social__label">Login com</span>
        <div className="social__provider">
          <CustomButton type="2" onClick={signInWithGoogle}>
            Facebook
          </CustomButton>
          <CustomButton type="2" onClick={signInWithGoogle}>
            Google
          </CustomButton>
        </div>
      </div>
      {message && (
        <Portal>
          <StatusMessage>{message}</StatusMessage>
        </Portal>
      )}
    </Wrapper>
  );
};

export default Login;
