import React from 'react';
import './Hero.scss';

interface HeroProps {
  changeSecretValue: (increaseValue: number) => void;
}

export function Hero({ changeSecretValue }: HeroProps): React.JSX.Element {
  const onIncreaseBtnClick = (increaseValue: number) => {
    changeSecretValue(increaseValue);
  };

  return (
    <section id="hero-section">
      <div className="container flex">
        <div className="left">
          <h1>Discover digital art & Collect NFTs</h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
          </p>
          <button type="button" className="common-btn fill">
            <img src="./assets/RocketLaunch.svg" alt="" />
            <span>Get Started</span>
          </button>
          <div className="statistics flex">
            <div className="statistics-item" />
            <div className="statistics-item" />
            <div className="statistics-item" />
          </div>
        </div>
        <div className="right" />
      </div>
      <button onClick={() => onIncreaseBtnClick(1)} type="button">
        +1
      </button>
      <button onClick={() => onIncreaseBtnClick(2)} type="button">
        +2
      </button>
      <button onClick={() => onIncreaseBtnClick(4)} type="button">
        +4
      </button>
    </section>
  );
}
