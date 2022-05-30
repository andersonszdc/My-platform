import React from "react";
import { WrapperLogin } from "./styles";

export const LayoutLogin: React.FC = ({ children }) => {
  return (
    <WrapperLogin>
      <div className="home__actions">{children}</div>
    </WrapperLogin>
  );
};
