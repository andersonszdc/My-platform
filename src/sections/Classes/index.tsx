import React from "react";
import Card from "../../components/Card";
import { StyledClasses } from "./styles";

const Classes: React.FC = () => {
  return (
    <StyledClasses>
      <h2 className="label">Módulos</h2>
      <div className="cards">
        <Card />
        <Card />
      </div>
    </StyledClasses>
  );
};

export default Classes;
