import React from "react";
import LessonCard from "../../components/LessonCard";
import { StyledClasses } from "./styles";

const Classes: React.FC = () => {
  return (
    <StyledClasses>
      <h2 className="label">Módulos</h2>
      <div className="cards">
        <LessonCard />
        <LessonCard />
        <LessonCard />
        <LessonCard />
      </div>
    </StyledClasses>
  );
};

export default Classes;
