import styled from "styled-components";

export const StyledLayoutNavBar = styled.div`
  display: flex;
  gap: 32px;
  height: 100vh;
  overflow-y: hidden;

  .main-section {
    width: 100%;
    padding: 40px;
    overflow-y: scroll;
    border-left: 1px solid ${({ theme }) => theme.purple};
  }
`;
