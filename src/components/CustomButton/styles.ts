import styled from "styled-components";

export const StyledCustomButton = styled.button`
  padding: 12px 48px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  color: #1d0b41;
  background-color: ${({ theme }) => theme.blue};
  transition: 0.125s ease-in;
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;

export const StyledCustomButton2 = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.blue};
  background-color: transparent;
  cursor: pointer;
  transition: 0.125s ease-in;
  :hover {
    color: ${({ theme }) => theme.white};
  }
`;

export const StyledCustomButton3 = styled.button`
  padding: 12px 0px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  color: #1d0b41;
  background-color: ${({ theme }) => theme.blue};
  transition: 0.125s ease-in;
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;
