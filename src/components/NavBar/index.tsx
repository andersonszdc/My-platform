import React from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "@firebase/auth";
import House from "../../../assets/House";
import Logout from "../../../assets/Logout";
import { Icon, Wrapper } from "./styles";

const NavBar: React.FC = () => {
  const router = useRouter();

  const SignOut = () => {
    signOut(getAuth())
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Icon>
        <House />
      </Icon>
      <Icon onClick={SignOut}>
        <Logout />
      </Icon>
    </Wrapper>
  );
};

export default NavBar;
