import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  margin: 0 auto;
  width: 400px;
  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    background-color: white;
    width: 100%;
    border-radius: 16px;
  }
  .form__btn {
    background-color: #f72585;
    padding: 8px 24px;
    border-radius: 8px;
    border: none;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
  }
`;
