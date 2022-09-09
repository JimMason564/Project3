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
    </footer>
  );
}

export default Footer;