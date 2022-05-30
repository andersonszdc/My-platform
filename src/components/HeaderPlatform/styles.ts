import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px 24px 0;

    .header__morning {
        font-size: 24px;
        font-weight: 600;
    }

    .perfil__name {
        font-size: 20px;
        font-weight: 600;
    }

    .header__perfil {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .perfil__img {
        border-radius: 1rem;
        background-color: white;
    }
`