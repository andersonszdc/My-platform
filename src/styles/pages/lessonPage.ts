import styled from "styled-components";

export const StyledLessonPage = styled.div`
  display: flex;
  gap: 40px;

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 40px;
  }

  .screen {
    width: 100%;
    aspect-ratio: 16/9;
    background-color: ${({ theme }) => theme.black};
    border-radius: 16px;
  }
`;
