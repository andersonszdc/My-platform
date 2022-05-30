import React, { useState } from "react";
import firebaseApp, { db } from "../../firebase/firebaseClient";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link";
import Portal from "../../HOC/Portal";
import { StatusMessage, Wrapper } from "./styles";
import CustomInput from "../CustomInput";

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
          type="email"
          callback={handleChange}
          value={userData.email}
        />
        <CustomInput
          type="password"
          callback={handleChange}
          value={userData.password}
        />
        <div className="form__actions">
          <div className="form__utilities">
            <Link href="/signUp">Criar conta</Link>
            <Link href="/forget">Esqueci a senha</Link>
          </div>
          <button className="form__send">Entrar</button>
        </div>
      </form>
      <div className="social">
        <span className="social__label">Login com</span>
        <div className="social__provider">
          <button onClick={signInWithGoogle}>Facebook</button>
          <button onClick={signInWithGoogle}>Google</button>
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
