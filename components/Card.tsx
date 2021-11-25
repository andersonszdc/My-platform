import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/Arrow';

const Wrapper = styled.div`
    flex-shrink: 0;
    min-width: 15%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 1.5rem;
    border-radius: 1.5rem;
    background-color: aliceblue;
    aspect-ratio: 1;
    border: 1px solid black;

    .card__infos {
        margin-bottom: .75rem;
    }
    
    .infos__title {
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
    }
    
    .infos__teacher {
        font-size: 12px;
        font-weight: 400;
    }

    .card__class {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
            <Progress />
            <div className="card__class">
                <h3 className="class__completed">8/12 aulas</h3>
                <Arrow />
            </div>
        </Wrapper>
    );
}

export default Card;

type ProgressProps = {
    progress: Number
    circ: number
    strokeWidth: number
    r: number
}

const WrapperProgress = styled.div<ProgressProps>`
${props => `
    display: inline-flex;
    position: relative;
    justify-content: left;
    transition: all .5s ease-in-out;
    svg {
        position: relative;
        z-index: 1000;
    }
    svg circle {
        width: 100%;
        height: 100%;
        fill: gray;
        stroke-linecap: round;
        stroke-width: ${props.strokeWidth};
        stroke-dasharray: ${props.circ};
        stroke-dashoffset: calc(${props.circ} - (${props.circ}*${props.progress}/100));
        stroke: pink;
    }
    .number {
        position: absolute;
        width: calc(${2*props.r}px + ${props.strokeWidth}px);
        height: calc(2*${props.r}px + ${props.strokeWidth}px);
        align-items: center;
        justify-content: center;
        display: flex;
        z-index: 2000;
        color: pink;
        font-size: 1rem;
    }
`}
`
    
    const Progress = () => {

    const raio = 35
    const strokeWidth = 4
    const progress = 90
    const circ = 2*raio*Math.PI

    return (
        <WrapperProgress r={raio} strokeWidth={strokeWidth} circ={circ} progress={progress}>
            <svg width={2*raio + strokeWidth} height={2*raio + strokeWidth}>
                <circle r={raio} cx={raio+strokeWidth/2} cy={raio+strokeWidth/2}/>
            </svg>
            <div className="number">
                {progress}%
            </div>
        </WrapperProgress>
    )
}