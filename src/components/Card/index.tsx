import React from "react";
import Arrow from "../../../assets/Arrow";
import CustomButton from "../CustomButton";
import { StyledCard } from "./styles";

const Card: React.FC = () => {
  return (
    <StyledCard>
      <h2 className="title">Fundamentos do Design</h2>
      <h3 className="subtitle">24 aulas - 2h32min</h3>
      <CustomButton>Assistir</CustomButton>
    </StyledCard>
  );
};

export default Card;
