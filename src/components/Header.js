import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div className="navigation">
      <h1>
        <Link to="/">Math Magicians</Link>
      </h1>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  </nav>
);

export default Header;
