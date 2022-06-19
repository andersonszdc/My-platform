import React from "react";
import Divider from "../../components/Divider";
import NavBar from "../../components/NavBar/index";
import { StyledLayoutNavBar } from "./styles";

export const LayoutNavBar: React.FC = ({ children }) => {
  return (
    <StyledLayoutNavBar>
      <div className="navbar">
        <NavBar />
      </div>
      <Divider />
      <div className="main-section">{children}</div>
    </StyledLayoutNavBar>
  );
};
