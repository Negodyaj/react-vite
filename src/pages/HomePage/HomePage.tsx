import React, { useEffect, useState } from 'react';
import { Artists } from './components/Artists/Artists';
import { Hero } from './components/Hero/Hero';
import avatar from './av1.png';
import image from './img1.png';
import './HomePage.scss';

export function HomePage(): React.JSX.Element {
  const [counter, setCounter] = useState<number | undefined>(undefined);
  const [superMode, setSuperMode] = useState(false);

  useEffect(() => {
    console.debug('effect');
  }, [counter, superMode]);

  useEffect(() => {
    console.debug('superMode effect');
  }, [superMode]);

  function increaseCounter() {
    setCounter(counter ? counter + 1 : 1);
  }

  const decreaseCounter = () => {
    setCounter(counter !== undefined ? counter - 1 : 1);
    console.debug(counter);
  };

  const makeSuper = () => {
    setSuperMode(!superMode);
  };

  return (
    <div id="home-page">
      <Hero />
      <section className="container">
        Counter: {counter} <br />
        <button type="button" onClick={increaseCounter}>
          Increase
        </button>{' '}
        &nbsp;{' '}
        <button type="button" onClick={decreaseCounter}>
          Decrease
        </button>
        <button type="button" onClick={makeSuper}>
          SuperPower
        </button>
      </section>
      <section>{superMode && 'SUPER!!!!'}</section>
      <section id="mushroom-container">
        <img src="./assets/mushroom.png" alt="" />
      </section>

      <div className="image-container">
        <img src={image} alt="" />
        <div className="overlay" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quos illum. Provident numquam qui aperiam
        </p>
      </div>

      <Artists />

      <div className="container">
        <div className="artists-container my-slider" />
      </div>

      <div className="container" id="decoration">
        <div className="decoration-container">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
}
