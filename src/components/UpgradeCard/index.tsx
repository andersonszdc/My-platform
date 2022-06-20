import React from "react";
import CustomButton from "../CustomButton";
import { StyledUpgradeCard } from "./styles";

const UpgradeCard = () => {
  return (
    <StyledUpgradeCard>
      <h2>Aproveite mais a plataforma!</h2>
      <CustomButton type="3">Fazer upgrade</CustomButton>
    </StyledUpgradeCard>
  );
};

export default UpgradeCard;
