import React from 'react';
import styled from 'styled-components';
import House from '../assets/House';
import Logout from '../assets/Logout';
import Setting from '../assets/Setting';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 32px 24px;
    gap: 36px;
    background-color: #FF5D8F;
    border-radius: 16px;
`

const NavBar: React.FC = () => {
  return (
      <Wrapper>
          <House />
          <Setting />
          <Logout />
      </Wrapper>
  );
}

export default NavBar;