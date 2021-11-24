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

const WrapperNavBar = styled.div`
    display: flex;
    padding: 32px;
    gap: 32px;
    height: 100%;
    .content {
        width: 100%;
    }
`

const ContainerNavBar = styled.div`
    height: 100vh;
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

export const LayoutNavBar: React.FC = ({children}) => {
    return (
        <ContainerNavBar>  
            <WrapperNavBar>
                <NavBar/>
                <div className="content">
                    { children }
                </div>
            </WrapperNavBar>
        </ContainerNavBar>
    );
}