import React from "react";
import CustomButton from "../CustomButton";
import { StyledCardUpgrade } from "./styles";

const CardUpgrade = () => {
  return (
    <StyledCardUpgrade>
      <h2>Aproveite mais a plataforma!</h2>
      <CustomButton type="3">Fazer upgrade</CustomButton>
    </StyledCardUpgrade>
  );
};

export default CardUpgrade;
