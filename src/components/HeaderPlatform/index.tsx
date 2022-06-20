import React from "react";
import Image from "next/image";
import { Wrapper } from "./styles";
import SearchBar from "../SearchBar";
import BellIcon from "../../assets/Icons/Bell";
import theme from "../../styles/colors";

const HeaderPlatform = ({ user }: any) => {
  return (
    <Wrapper>
      <SearchBar />
      <div className="header__right">
        <div className="right__notification">
          <BellIcon size={24} fill={theme.black} />
        </div>
        <div className="right__perfil">
          <Image
            className="perfil__img"
            width="40"
            height="40"
            src={user.photoURL || "/images/profile.png"}
            alt=""
          />
          <h1 className="perfil__name">{user.displayName}</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeaderPlatform;
