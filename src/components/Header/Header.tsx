import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './assets/Logo.png';

export function Header(): React.JSX.Element {
  return (
    <header className="flex">
      <img src={logo} alt="NFT Marketplace" />
      <button type="button" className="icon-btn burger-menu mobile-only">
        <img src="./assets/burger.svg" alt="Menu" />
      </button>
      <nav className="flex">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="qwerty" className="nav-link">
          Marketplace
        </Link>
        <Link to="/" className="nav-link">
          Rankings
        </Link>
        <Link to="/" className="nav-link">
          Connect a wallet
        </Link>
        <Link to="sign-up" className="nav-button fill">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
