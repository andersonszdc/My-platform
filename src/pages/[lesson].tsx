import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import LessonsGuide from "../components/LessonsGuide";
import { LayoutNavBar } from "../layouts/NavBarLayout";

const LessonPage = ({ message, lesson }) => {
  return (
    <div>
      <h1>Como escolher a tipografia</h1>
      <h2>Fundamentos do Design</h2>
      <div className="screen"></div>
      <div className="tabs">
        <div>Notes</div>
        <div>Resources</div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien est
        adipiscing arcu, cursus. Sit quam eu augue tempor aenean nunc ipsum
        pharetra, amet.
      </p>
      <LessonsGuide />
    </div>
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
