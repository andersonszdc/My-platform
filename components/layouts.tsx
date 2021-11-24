import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import cover from '../assets/home-cover.png';
import NavBar from './NavBar';

const WrapperLogin = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 16px;
    overflow: hidden;

    .home__image {
        height: 90vh;
        width: calc(813/673*90vh);
    }

    .home__actions {
        width: 500px;
        background: #FFF;
    }
`

const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
`

export const LayoutLogin: React.FC = ({children}) => {
    return (
        <ContainerLogin>  
            <WrapperLogin>
                <div className="home__actions">
                    { children }
                </div>
                <div className="home__image">
                    <Image alt="" priority layout="responsive" src={cover} />
                </div>
            </WrapperLogin>
        </ContainerLogin>
    );
}

const WrapperNavBar = styled.div`
    display: flex;
    margin: 32px;
    gap: 32px;
    height: calc(100vh - 64px);
    .content {
        width: 100%;
        overflow: hidden;
    }
`

export const LayoutNavBar: React.FC = ({children}) => {
    return (  
            <WrapperNavBar>
                <NavBar/>
                <div className="content">
                    { children }
                </div>
            </WrapperNavBar>
    );
}