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

export const StyledInfoContents = styled.div`
  .notes {
    margin-top: 24px;
  }

  .resource-cards {
    display: grid;
    gap: 16px;

    margin-top: 24px;
  }
`;
