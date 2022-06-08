import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .customInput {
    display: flex;
    gap: 8px;

    border: 2px solid #00e3e3;
    border-radius: 8px;
    padding: 12px;

    font-size: 16px;
    font-weight: 400;
    transition: 0.2s ease-in;

    :hover {
      border-color: #e1e1e1;
      box-shadow: 0px 0px 0px 6px rgba(0, 227, 227, 0.2);
    }

    :focus-within {
      border-color: #00e3e3;
      box-shadow: 0px 0px 0px 6px rgba(0, 227, 227, 0.2);
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
