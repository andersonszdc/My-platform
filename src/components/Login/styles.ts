import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: 100%;
    justify-content: center;
  }

  .form__label {
    font-size: 24px;
    font-weight: 600;
  }

  .form__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form__utilities {
    display: flex;
    gap: 24px;
    font-size: 16px;
    font-weight: 500;
    color: #00e3e3;
  }

  .social {
    display: flex;
    justify-content: space-between;
  }

  .social__provider {
    display: flex;
    gap: 32px;
  }
`;

export const StatusMessage = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 1rem 4rem;
  border-radius: 1rem;
`;
