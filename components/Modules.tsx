import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Arrow from '../assets/Arrow';
import Card from './Card';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
  margin-bottom: 1rem;

  .header__title {
    font-size: 20px;
    font-weight: 500;
  }

  .header__btns {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .btn__back, .btn__forward {
    display: inline-flex;
    background-color: white;
    border-radius: 8px;
  }
`

const Slide = styled.div`
  display: flex;
  gap: 1rem;
  transition: all .5s ease-in-out;
`

const Index: React.FC = () => {

  const slideRef = useRef(null)
  const [translate, setTranslate] = useState(0)

  const leftClick = () => {
    setTranslate(t => t + 820)
  }

  const rightClick = () => {
    setTranslate(t => t - 820)
  }

  useEffect(() => {
    console.log(slideRef.current.style.transform = `translate(${translate}px)`)
  })

  return (
    <>
      <Header>
        <h2 className="header__title">Módulos</h2>
        <div className="header__btns">
          <div onClick={leftClick} className="btn__back">
            <Arrow />
          </div>
          <div onClick={rightClick} className="btn__forward">
            <Arrow />
          </div>
        </div>
      </Header>
      <Slide ref={slideRef}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slide>
    </>
  );
}

export default Index;