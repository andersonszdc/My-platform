import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import cover from '../assets/home-cover.png';

const Wrapper = styled.div`
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

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
`

const Layout: React.FC = ({children}) => {
    return (
        <Container>  
            <Wrapper>
                <div className="home__actions">
                    { children }
                </div>
                <div className="home__image">
                    <Image alt="" priority layout="responsive" src={cover} />
                </div>
            </Wrapper>
        </Container>
    );
}

export default Layout;