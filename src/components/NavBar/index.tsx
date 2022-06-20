import React, { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "@firebase/auth";
import { StyledNavBar, StyledTab } from "./styles";
import UpgradeCard from "../UpgradeCard";
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
    <StyledNavBar
      onMouseEnter={() => setShrink(false)}
      onMouseLeave={() => setShrink(true)}
      shrink={shrink}
    >
      <h1 className="logo" onClick={() => router.push("/platform")}>
        {shrink ? "M" : "My-Platform"}
      </h1>
      <div className="tabs">
        <Tab shrink={shrink} label="Home" Icon={House} active />
        <Tab shrink={shrink} label="Logout" Icon={Logout} onClick={SignOut} />
      </div>
      {!shrink && (
        <div className="card-upgrade">
          <UpgradeCard />
        </div>
      )}
    </StyledNavBar>
  );
};

export default NavBar;

type TabProps = {
  Icon?: ({ fill }: IconProps) => JSX.Element;
  active?: boolean;
  label: string;
  shrink: boolean;
  onClick?: () => void;
};

const Tab = ({ Icon, active, label, shrink, onClick }: TabProps) => {
  return (
    <StyledTab onClick={onClick} shrink={shrink} active={active}>
      {Icon && <Icon />}
      {!shrink && <p>{label}</p>}
    </StyledTab>
  );
};
