import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../assets/img/footer_img.png';

function Footer() {
  return (
    <footer className="footer text-center mt-auto">
      <div className="container d-flex justify-content-between">
      <img className="footer-bg" src={footerBg} alt="BricksRepo logo" />
        <ul className="footer-nav d-flex flex-row align-items-center">
          <li className="px-3"><Link to="/">Home</Link></li>
          <li className="px-3"><Link to="/LoginForm">Login</Link></li>
          <li className="px-3"><Link to="/SignupForm">Signup</Link></li>
          <li className="px-3 copyright">&copy; 2022 BricksRepo</li>
        </ul>
        </div>
        <div className="container d-flex flex-column mt-5">
        <p>The building blocks that power the Bricks Repo App are thoughtfully shared by Brickset, one of the most established, accurate, and up-to-date LEGO databases on the Internet today: they've been collating data since 1997. Brickset's database contains information on 18992 LEGO sets and other items released over the last 73 years.</p>
        <p>LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks of the LEGO Group of Companies. ©2022 The LEGO Group.</p>
      </div>
    </footer>
  );
}

export default Footer;