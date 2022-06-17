import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.grayLight};
  input {
    border: none;
    background-color: transparent;
  }
`;
