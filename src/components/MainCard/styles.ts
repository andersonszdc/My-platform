import styled from "styled-components";

export const StyledMainCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;

  padding: 32px;
  border-radius: 8px;
  aspect-ratio: 3;

  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(0deg, #c4c4c4, #c4c4c4);

  .title {
    color: ${({ theme }) => theme.blue};
    font-weight: 400;
    font-size: 24px;
  }

  .subtitle {
    color: ${({ theme }) => theme.white};
    font-weight: 500;
    font-size: 16px;
  }
`;
