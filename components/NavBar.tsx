import { getAuth, signOut } from '@firebase/auth';
import { useRouter } from 'next/router';
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
    const router = useRouter()
    const SignOut = () => {
        signOut(getAuth())
        .then(() => {
            router.push('/')
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Wrapper>
            <House />
            <Setting />
            <div onClick={SignOut}>
                <Logout />
            </div>
        </Wrapper>
    );
}

export default NavBar;