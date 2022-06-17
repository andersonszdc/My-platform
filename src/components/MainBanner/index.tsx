import React from "react";
import CustomButton from "../CustomButton";
import { StyledMainBanner } from "./styles";

const MainBanner: React.FC = () => {
  return (
    <StyledMainBanner>
      <h2 className="title">Fundamentos do Design</h2>
      <h3 className="subtitle">24 aulas - 2h32min</h3>
      <div>
        <CustomButton>Ver planos</CustomButton>
      </div>
    </StyledMainBanner>
  );
};

export default MainBanner;
