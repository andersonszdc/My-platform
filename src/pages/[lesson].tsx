import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import InfoTabs from "../components/InfoTabs";
import LessonsGuide from "../components/LessonsGuide";
import { LayoutNavBar } from "../layouts/NavBarLayout";
import { StyledLessonPage } from "../styles/pages/lessonPage";

const LessonPage = ({ message, lesson }) => {
  return (
    <StyledLessonPage>
      <main className="main-action">
        <h1 className="title">Como escolher a tipografia</h1>
        <h2 className="subtitle">Fundamentos do Design</h2>
        <div className="screen"></div>
        <InfoTabs />
      </main>
      <LessonsGuide />
    </StyledLessonPage>
  );
};

LessonPage.layout = LayoutNavBar;

export default LessonPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { lesson: "1" } }, { params: { lesson: "2" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { message: "Pamella s2", lesson: params.lesson } };
};
