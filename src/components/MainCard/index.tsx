import React from "react";
import CustomButton from "../CustomButton";
import { StyledMainCard } from "./styles";

const MainCard: React.FC = () => {
  return (
    <StyledMainCard>
      <h2 className="title">Fundamentos do Design</h2>
      <h3 className="subtitle">24 aulas - 2h32min</h3>
      <div>
        <CustomButton>Ver planos</CustomButton>
      </div>
    </StyledMainCard>
  );
};

export default MainCard;
