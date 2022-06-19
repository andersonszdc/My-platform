import styled from "styled-components";

export const StyledInfoTabs = styled.section`
  display: flex;
  gap: 40px;
`;

export const StyledInfoTab = styled.section`
  cursor: pointer;
  .underline {
    content: "";
    display: block;
    height: 4px;
    width: 100%;
    background-color: ${({ theme }) => theme.blue};
  }
`;
