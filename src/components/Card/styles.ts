import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  border-radius: 8px;
  aspect-ratio: 2/3;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(0deg, #c4c4c4, #c4c4c4);

  .title {
    color: ${({ theme }) => theme.blue};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .subtitle {
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 32px;
  }
`;
