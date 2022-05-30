import React from "react";
import NavBar from "../../components/NavBar/index";
import { WrapperNavBar } from "./styles";

export const LayoutNavBar: React.FC = ({ children }) => {
  return (
    <WrapperNavBar>
      <NavBar />
      <div className="content">{children}</div>
    </WrapperNavBar>
  );
};
