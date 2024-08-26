import './utilities.css';
import './Button.css';
import React from 'react';
const Button = ({children , onClick}) => {
  return (
    <button type="button" className="border-red bg-red cursor-click index-1 text-white font-20" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
