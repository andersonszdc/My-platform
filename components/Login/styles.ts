import styled from "styled-components"

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

    .form__input {
        border: 1px solid #F72585;
        border-radius: 16px;
        padding: 12px;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Poppins';
    }

    .form__actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 96px;
    }

    .form__utilities {
        display: flex;
        gap: 24px;
        font-size: 12px;
    }

    .form__send {
        background-color: #F72585;
        color: #FFF;
        padding: 12px 24px;
        border-radius: 16px;
        border: none;
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
    }

    .social {
        display: flex;
        justify-content: space-between;
    }

    .social__provider {
        display: flex;
        gap: 32px;
    }

    .social__provider button {
        font-family: 'Poppins';
        font-size: 14px;
        font-weight: 400;
        border: none;
        background: none;
        color: #F72585;
        cursor: pointer;
    }
`

export const StatusMessage = styled.div`
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 1rem 4rem;
    border-radius: 1rem;
`