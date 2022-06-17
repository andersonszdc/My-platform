import Image from "next/image";
import React from "react";
import Approve from "../../assets/Icons/Approve";
import Lock from "../../assets/Icons/lock";
import RightArrow from "../../assets/Icons/RightArrow";
import theme from "../../styles/colors";
import { StyledLessonsGuide, StyledLessonTab } from "./styles";

const LessonsGuide = () => {
  return (
    <StyledLessonsGuide>
      <h1 className="title">Fundamentos do Design</h1>
      <LessonTab />
      <LessonTab />
      <LessonTab block />
    </StyledLessonsGuide>
  );
};

type LessonTabProps = {
  block?: boolean;
};

const LessonTab = ({ block }: LessonTabProps) => {
  return (
    <StyledLessonTab block={block}>
      <div className="lesson">
        <p className="lesson__title">Tipografias</p>
        {block ? (
          <Lock size={20} fill={theme.black} />
        ) : (
          <Approve size={20} fill={theme.blue} />
        )}
      </div>
      <RightArrow size={24} fill={block ? theme.black : theme.blue} />
    </StyledLessonTab>
  );
};

export default LessonsGuide;
