import React, { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "@firebase/auth";
import { Icon, StyledNavBar, StyledTab } from "./styles";
import theme from "../../styles/colors";
import CardUpgrade from "../CardUpgrade";
import House from "../../assets/Icons/House";
import Logout from "../../assets/Icons/Logout";
import { IconProps } from "../../assets/Icons/types";

const NavBar = () => {
  const router = useRouter();
  const [shrink, setShrink] = useState(true);

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
    <StyledNavBar>
      <h1 className="logo">{shrink ? "M" : "My-Platform"}</h1>
      <div className="tabs">
        <Tab shrink={shrink} label="Home" Icon={House} active />
        <Tab shrink={shrink} label="Logout" Icon={Logout} />
      </div>
      {!shrink && <CardUpgrade />}
    </StyledNavBar>
  );
};

export default NavBar;

type TabProps = {
  Icon?: ({ fill }: IconProps) => JSX.Element;
  active?: boolean;
  label: string;
  shrink: boolean;
};

const Tab = ({ Icon, active, label, shrink }: TabProps) => {
  return (
    <StyledTab shrink={shrink} active={active}>
      {Icon && <Icon />}
      {!shrink && <p>{label}</p>}
    </StyledTab>
  );
};
