import React from "react";
import Arrow from "../../../assets/Arrow";
import { Wrapper, WrapperProgress } from "./styles";

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
};

export default Card;

const Progress = () => {
  const raio = 35;
  const strokeWidth = 4;
  const progress = 90;
  const circ = 2 * raio * Math.PI;

  return (
    <WrapperProgress
      r={raio}
      strokeWidth={strokeWidth}
      circ={circ}
      progress={progress}
    >
      <svg width={2 * raio + strokeWidth} height={2 * raio + strokeWidth}>
        <circle
          r={raio}
          cx={raio + strokeWidth / 2}
          cy={raio + strokeWidth / 2}
        />
      </svg>
      <div className="number">{progress}%</div>
    </WrapperProgress>
  );
};
