import React, { useState } from 'react';
import './utilities.css';
import './Header.css';
import Line from './Line';
const Header = (props) => {
  const [isActive, setIsActive] = useState(false);
  const menuActiveHandler = () => {
    setIsActive((prev) => !prev);
  };
  const roleSectionHandler = () => {
    props.onClick(false);
    setIsActive((prev) => !prev);
  }
  return (
    <header id="header" className="w-100">
      <nav className="w-100 h-100">
        <div className="navbar bg-dark hr-rounded w-100 h-100">
          <div className="about border-red cursor-click">
            <i className="fas fa-info mb-2 index-1 text-dark-red"></i>
          </div>
          <h3 className="text-white">تنظیمات بازی</h3>
          <div className="hamburger bg-dark-low cursor-click" onClick={menuActiveHandler}>
            <span className={`bar ${isActive ? 'active' : ''} bg-red`}></span>
          </div>
        </div>
        <ul
          className={`menu-list ${
            isActive ? 'active' : ''
          } text-white bg-darken hr-rounded w-100 font-20`}
        >
          <li className="list-item border-red" onClick={roleSectionHandler}>صفحه اصلی</li>
          <li className="list-item">راهنمای بازی</li>
          <li className="list-item border-red">تنظیمات</li>
          <li className="list-item">
          <Line width="103px" height="3px" bottom="5px" left="50%"/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
