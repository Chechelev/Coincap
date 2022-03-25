import React, { Component } from 'react';
import './header.scss';
import logo from './logo.svg';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="container__inner">
            <div className="logo">
              <img src={logo} alt="Coincap"></img>
            </div>
            <div className="top-coins">

              <div className="top-coins__item">
                <div className="top-coins__item-name">Bitcoin</div>
                <div className="top-coins__item-price">43897$</div>
              </div>

              <div className="top-coins__item">
                <div className="top-coins__item-name">Ethereum</div>
                <div className="top-coins__item-price">3106$</div>
              </div>

              <div className="top-coins__item">
                <div className="top-coins__item-name">Tether</div>
                <div className="top-coins__item-price">1$</div>
              </div>
            </div>

            <div className="user-wallet-info">
              <div className="user-wallet__current-cost">134,32 USD</div>
              <div className="user-wallet__different-cost">+2,38</div>
              <div className="user-wallet__different-cost-percent">(+1,80%)</div>
              <i className="fa-solid fa-briefcase"></i>
            </div>

          </div>
        </div>
      </header>
    )
  }
} 