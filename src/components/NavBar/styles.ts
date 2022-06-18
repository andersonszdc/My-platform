import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-direction: column;
  height: 100%;
  padding: 40px 0;
  border-radius: 16px;

  .logo {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  .tabs {
    margin-top: 80px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;

type StyledTabProps = {
  active?: boolean;
  shrink?: boolean;
};

export const StyledTab = styled.div<StyledTabProps>`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  padding: 12px ${({ shrink }) => (shrink ? "20px" : "40px")} 12px 40px;
  border-radius: 0px 16px 16px 0px;
  background-color: ${({ active, theme }) =>
    active ? theme.purple : "transparent"};
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  transition: 0.15s ease-in;
  :hover {
    background-color: ${({ active, theme }) => !active && theme.purple15};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  path {
    fill: ${({ active, theme }) => (active ? theme.blue : theme.black)};
  }

  p {
    color: ${({ active, theme }) => (active ? theme.blue : theme.black)};
    font-size: 14px;
    font-weight: 400;
  }
`;
