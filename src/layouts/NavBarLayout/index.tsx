import React from "react";
import NavBar from "../../components/NavBar/index";
import { StyledLayoutNavBar } from "./styles";

export const LayoutNavBar: React.FC = ({ children }) => {
  return (
    <StyledLayoutNavBar>
      <NavBar />
      <div className="main-section">{children}</div>
    </StyledLayoutNavBar>
  );
};
