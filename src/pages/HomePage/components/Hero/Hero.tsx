import React from 'react';
import './Hero.scss';

export function Hero(): React.JSX.Element {
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
    </section>
  );
}
