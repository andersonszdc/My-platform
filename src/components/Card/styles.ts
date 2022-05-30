import styled from "styled-components";

type ProgressProps = {
  progress: Number;
  circ: number;
  strokeWidth: number;
  r: number;
};

export const Wrapper = styled.div`
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
    margin-bottom: 0.75rem;
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
`;

export const WrapperProgress = styled.div<ProgressProps>`
  ${(props) => `
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
        stroke-dashoffset: calc(${props.circ} - (${props.circ}*${
    props.progress
  }/100));
        stroke: pink;
    }
    .number {
        position: absolute;
        width: calc(${2 * props.r}px + ${props.strokeWidth}px);
        height: calc(2*${props.r}px + ${props.strokeWidth}px);
        align-items: center;
        justify-content: center;
        display: flex;
        z-index: 2000;
        color: pink;
        font-size: 1rem;
    }
`}
`;
