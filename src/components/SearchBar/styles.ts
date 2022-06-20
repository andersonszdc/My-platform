import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.grayLight};
  cursor: text;
  :focus-within {
    border-color: #00e3e3;
    box-shadow: 0px 0px 0px 6px rgba(0, 227, 227, 0.4);
  }
  input {
    border: none;
    background-color: transparent;
  }
`;
