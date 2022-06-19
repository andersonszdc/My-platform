import styled from "styled-components";

export const StyledCardUpgrade = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.white};

  h2 {
    font-size: 16px;
    font-weight: 500;
  }
`;
