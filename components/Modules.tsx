import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Arrow from '../assets/Arrow';
import Card from './Card';

const Slide = styled.div`
    display: flex;
    gap: .5rem;
    white-space: nowrap;
    overflow-x: visible;
    transition: 0.8s ease-in-out;
`

const WrapSlide = styled.div`
  overflow-x: hidden;
  width: 100%;
`

const Modules = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    margin-right: 32px;
  }

  .header-btns {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .btn-left, .btn-right {
    display: inline-flex;
    background-color: white;
    border-radius: 8px;
  }
`

const Slider: React.FC = () => {

  const slideRef = useRef(null)
  const [translate, setTranslate] = useState(0)

  const leftClick = () => {
    setTranslate(t => t + 520)
  }

  const rightClick = () => {
    setTranslate(t => t - 520)
  }

  useEffect(() => {
    console.log(slideRef.current.style.transform = `translate(${translate}px)`)
  })

  return (
    <Modules>
      <div className="header">
        <h2 className="header-text">Módulos</h2>
        <div className="header-btns">
          <div onClick={leftClick} className="btn-left">
            <Arrow />
          </div>
          <div onClick={rightClick} className="btn-right">
            <Arrow />
          </div>
        </div>
      </div>
      <WrapSlide>
        <Slide ref={slideRef}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Slide>
      </WrapSlide>
    </Modules>
  );
}

export default Slider;