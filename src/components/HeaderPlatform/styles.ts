import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px 24px 0;

    .perfil__name {
        font-size: 16px;
        font-weight: 400;
    }

    .header__perfil {
        display: flex;
        gap: 16px;
        align-items: center;
    }

    .perfil__img {
        border-radius: 50%;
        background-color: white;
    }
`