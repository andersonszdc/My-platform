import React from "react";
import { useRouter } from "next/router";
import { getAuth, signOut } from "@firebase/auth";
import House from "../../../assets/House";
import Logout from "../../../assets/Logout";
import { Icon, StyledTab, Wrapper } from "./styles";
import theme from "../../styles/colors";
import CardUpgrade from "../CardUpgrade";

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
      <h1>My-Platform</h1>
      <div className="tabs">
        <Tab label="Home" Icon={House} active />
        <Tab label="Logout" Icon={Logout} />
      </div>
      <CardUpgrade />
    </Wrapper>
  );
};

export default NavBar;

type TabProps = {
  Icon?: React.FC;
  active?: boolean;
  label: string;
};

const Tab = ({ Icon, active, label }: TabProps) => {
  return (
    <StyledTab active={active}>
      {Icon && <Icon />}
      <p>{label}</p>
    </StyledTab>
  );
};
