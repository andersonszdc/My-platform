import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
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
    }
`

const HeaderPlatform = ({user}: any) => {
  return (
    <Wrapper>
        <h1 className="header__morning">Bom dia, {user.displayName}!</h1>
        <div className="header__perfil">
            <Image className="perfil__img" width="75" height="75" src={user.photoURL} alt='' />
            <h1 className="perfil__name">{user.displayName}</h1>
        </div>
    </Wrapper>
  );
}

export default HeaderPlatform;