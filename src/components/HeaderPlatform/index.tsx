import React from "react";
import Image from "next/image";
import { Wrapper } from "./styles";
import SearchBar from "../SearchBar";

const HeaderPlatform = ({ user }: any) => {
  return (
    <Wrapper>
      <SearchBar />
      <div className="header__perfil">
        <Image
          className="perfil__img"
          width="40"
          height="40"
          src={user.photoURL || "/images/profile.png"}
          alt=""
        />
        <h1 className="perfil__name">{user.displayName}</h1>
      </div>
    </Wrapper>
  );
};

export default HeaderPlatform;
