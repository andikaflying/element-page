import React, { useState, useEffect } from "react";

const Header = () => {
  const [listNav, setListNav] = useState([]);
  
  useEffect(() => {
    mengaturListNavigasi();
  }, []);

  const mengaturListNavigasi = () => {
    setListNav(["Option 1", "Option 2", "Option 3", "Option 4"]);
  }

  console.log(listNav);

  return (
    <header id="header" className="alt skel-layers-fixed" style={{ background: 'black' }}>
        <h1><a href="index.html">HTML5 Website <span>by Html5webtemplates.co.uk</span></a></h1>
        <nav id="nav">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li>
              <a href="#" className="icon fa-angle-down">Layouts</a>
              <ul>
                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                <li><a href="right-sidebar.html">Right Sidebar</a></li>
                <li><a href="no-sidebar.html">No Sidebar</a></li>
                <li>
                  <a href="">Submenu</a>
                  <ul>
                    {listNav.length > 0 && listNav.map((item) => {
                      return <li><a href="#">{item}</a></li>
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="elements.html">Elements</a></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;