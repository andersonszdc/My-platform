import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-direction: column;
  height: 100%;
  padding: 40px 0;
  border-radius: 16px;

  .tabs {
    margin-top: 80px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;

type StyledTabProps = {
  active?: boolean;
};

export const StyledTab = styled.div<StyledTabProps>`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  padding: 12px 40px 12px 40px;
  border-radius: 0px 16px 16px 0px;
  background-color: ${({ active, theme }) =>
    active ? theme.purple : "transparent"};
  cursor: pointer;
  transition: 0.125s ease-in;
  :hover {
    background-color: ${({ active, theme }) =>
      active ? theme.blue : theme.grayLight};

    p {
      color: ${({ active, theme }) => (active ? theme.white : theme.black)};
    }

    path {
      fill: ${({ active, theme }) => (active ? theme.white : theme.black)};
    }
  }

  svg {
    width: 32px;
    height: 32px;
  }

  path {
    transition: 0.125s ease-in;
    fill: ${({ active, theme }) => (active ? theme.blue : theme.black)};
  }

  p {
    transition: 0.125s ease-in;
    color: ${({ active, theme }) => (active ? theme.blue : theme.black)};
    font-size: 16px;
    font-weight: 500;
  }
`;
