import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [listNav, setListNav] = useState([]);
  
  useEffect(() => {
    mengaturListNavigasi();
  }, []);

  const mengaturListNavigasi = () => {
    setListNav(["Option 1", "Option 2", "Option 3", "Option 4"]);
  }
  
  return (
    <header id="header" className="alt skel-layers-fixed" style={{ background: 'black' }}>
        <h1><a href="index.html">HTML5 Website <span>by Html5webtemplates.co.uk</span></a></h1>
        <nav id="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employee-page">Employee Page</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;