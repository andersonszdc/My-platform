import React from "react";
import Image from "next/image";
import profile from "../assets/profile.png";
import { Wrapper } from "./styles";

const HeaderPlatform = ({ user }: any) => {
  return (
    <Wrapper>
      <h1 className="header__morning">Olá, {user.displayName}!</h1>
      <div className="header__perfil">
        <Image
          className="perfil__img"
          width="75"
          height="75"
          src={user.photoURL || profile}
          alt=""
        />
        <h1 className="perfil__name">{user.displayName}</h1>
      </div>
    </Wrapper>
  );
};

export default HeaderPlatform;
