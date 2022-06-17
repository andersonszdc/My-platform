import styled from "styled-components";

export const StyledClasses = styled.section`
  .label {
    font-size: 24px;
    font-weight: 400;
    margin: 40px 0;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;
