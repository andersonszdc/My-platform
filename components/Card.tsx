import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/Arrow';

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background-color: aliceblue;
    aspect-ratio: 1;
    justify-content: space-between;
    
    .infos__title {
        font-size: 14px;
        font-weight: 600;
    }
    
    .infos__teacher {
        font-size: 12px;
        font-weight: 400;
    }

    .card__class {
        display: flex;
        justify-content: space-between;
    }

    .class__completed {
        font-size: 12px;
        font-weight: 700;
    }
`

const Card: React.FC = () => {
    return (
        <Wrapper>
            <div className="card__infos">
                <h2 className="infos__title">Fundamentos do Design</h2>
                <h3 className="infos__teacher">by Linde</h3>
            </div>
            <Percentage />
            <div className="card__class">
                <h3 className="class__completed">8/12 aulas</h3>
                <Arrow />
            </div>
        </Wrapper>
    );
}

export default Card;

const WrapperPercentage = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    svg {
        position: relative;
        width: 150px;
        height: 150px;
        z-index: 1000;
    }
    svg circle {
        width: 100%;
        height: 100%;
        fill: black;
        stroke-width: 10;
        stroke-linecap: round;
        stroke-dasharray: calc(439);
        stroke-dashoffset: calc(439 - (439*15/100));
        stroke: blue;
    }
    .number {
        position: absolute;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        z-index: 2000;
        color: blue;

    }
`

const Percentage = () => {
    return (
        <WrapperPercentage>
            <svg>
                <circle r="70" cx="75" cy="75"/>
            </svg>
            <div className="number">
                <h2>90%</h2>
            </div>
        </WrapperPercentage>
    )
}