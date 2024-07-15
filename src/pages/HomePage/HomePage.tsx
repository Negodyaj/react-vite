import { Artists } from "./components/Artists/Artists";
import { Hero } from "./components/Hero/Hero";
import avatar from "./av1.png";
import image from "./img1.png";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div id="home-page">
      <Hero />
      <section id="mushroom-container">
        <img src="./assets/mushroom.png" alt="" />
      </section>

      <div className="image-container">
        <img src={image} alt="" />
        <div className="overlay"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          quos illum. Provident numquam qui aperiam
        </p>
      </div>

      <Artists />

      <div className="container">
        <div className="artists-container my-slider"></div>
      </div>

      <div className="container">
        <div className="decoration-container">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};
