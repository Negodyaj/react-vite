import "./Header.scss";
import logo from "./assets/Logo.png";

export const Header = () => {
  return (
    <header className="flex">
      <img src={logo} alt="NFT Marketplace" />
      <button type="button" className="icon-btn burger-menu mobile-only">
        <img src="./assets/burger.svg" alt="Menu" />
      </button>
      <nav className="flex">
        <a href="" className="nav-link">
          Marketplace
        </a>
        <a href="" className="nav-link">
          Rankings
        </a>
        <a href="" className="nav-link">
          Connect a wallet
        </a>
        <a href="" className="nav-button fill">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
