import styled from "styled-components";

export const StyledLessonsGuide = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: ${({ theme }) => theme.grayLight};

  .title {
    font-size: 18px;
    font-weight: 500;
  }
`;

type StyledLessonTabProps = {
  block: boolean;
};

export const StyledLessonTab = styled.section<StyledLessonTabProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme, block }) =>
    block ? theme.white : theme.purple};
  color: ${({ theme, block }) => (block ? theme.black : theme.blue)};
  padding: 8px;
  cursor: pointer;

  .lesson {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .lesson__title {
    font-weight: 500;
    font-size: 14px;
  }
`;
