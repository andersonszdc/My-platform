import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;

  .header__right {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  .right__notification {
    display: flex;
    cursor: pointer;
  }

  .right__perfil {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .perfil__name {
    font-size: 16px;
    font-weight: 400;
  }

  .perfil__img {
    border-radius: 50%;
    background-color: white;
  }
`;
