import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .customInput {
    display: flex;
    gap: 8px;

    border: 2px solid #00E3E3;
    border-radius: 8px;
    padding: 12px;

    font-size: 16px;
    font-weight: 400;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
