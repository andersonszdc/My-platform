import { useRouter } from "next/router";
import React from "react";
import CustomButton from "../CustomButton";
import { StyledLessonCard } from "./styles";

const LessonCard = () => {
  const router = useRouter();
  
  return (
    <StyledLessonCard>
      <h2 className="title">Fundamentos do Design</h2>
      <h3 className="subtitle">24 aulas - 2h32min</h3>
      <CustomButton onClick={() => router.push("/1")}>Assistir</CustomButton>
    </StyledLessonCard>
  );
};

export default LessonCard;
