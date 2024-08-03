import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import brawlStarsIcon from '../../assets/brawl_stars_icon.png';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <img src={brawlStarsIcon} alt="Brawl Stars Icon" className="icon" />
          <div className="logo">
            <Link to="/">Brawl Stars Statistic</Link>
          </div>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Player</Link></li>
            <li><Link to="/brawlers">Brawlers</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
