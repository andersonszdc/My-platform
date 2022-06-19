import styled from "styled-components";

export const StyledResourceCard = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.grayLight};

  .file {
    display: flex;
    flex-direction: column;
    padding: 0 40px 0 8px;
  }

  .file__name {
    font-size: 12px;
    font-weight: 600;
  }

  .file__size {
    font-size: 12px;
    font-weight: 500;
  }

  .btn-download {
    cursor: pointer;
    display: flex;
    padding: 8px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 50%;
  }
`;
