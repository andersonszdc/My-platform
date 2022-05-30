import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar/index";

const WrapperLogin = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  align-items: center;

  .home__actions {
    border-radius: 16px;
    width: 500px;
    background: #fff;
    height: max-content;
    padding: 3rem;
  }
`;

export const LayoutLogin: React.FC = ({ children }) => {
  return (
    <WrapperLogin>
      <div className="home__actions">{children}</div>
    </WrapperLogin>
  );
};

const WrapperNavBar = styled.div`
  display: flex;
  margin: 32px;
  gap: 32px;
  height: calc(100vh - 64px);
  .content {
    width: 100%;
    overflow: hidden;
  }
`;

export const LayoutNavBar: React.FC = ({ children }) => {
  return (
    <WrapperNavBar>
      <NavBar />
      <div className="content">{children}</div>
    </WrapperNavBar>
  );
};
