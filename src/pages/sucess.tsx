import { useRouter } from 'next/router';
import React from 'react';

const Sucess: React.FC = () => {
    const router = useRouter()
    const goToPlatform = () => {
        router.push('/platform')
    }
    return (
        <>
            <div>Aproveite o seu curso!</div>
            <button onClick={goToPlatform}>Ir para plataforma</button>
        </>
    );
}

export default Sucess;