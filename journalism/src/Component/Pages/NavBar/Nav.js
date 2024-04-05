import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from './Logo.jpg';

function Nav() {
  return (
    <div>
      <div className='container'>
        <ul>
          <li><img src={Logo} alt="Logo" /></li>
        </ul>
        <div className='data'>
          <ul className="links">
            <li className="ul"><Link className='li' to={'/'}>Home</Link></li>
            <li className="ul"><Link className='li' to={'/Course'}>Course</Link></li>
            <li className="ul"><Link className='li' to={'/ContactUs'}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
