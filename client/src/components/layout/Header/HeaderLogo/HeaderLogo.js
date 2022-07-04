import React from "react";
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './HeaderLogo.scss';

export function RenderHeaderLogo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Coincap"></img>
      </Link>
    </div>
  );
};