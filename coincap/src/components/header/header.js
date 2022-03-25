import React, { Component } from 'react';
import './header.scss';
import logo from './logo.svg';
import { CoincapService } from '../../services/coincap-service';
export class Header extends Component {

  coincapService = new CoincapService();

  state = {
    coinList: null
  };

  componentDidMount() {
    this.coincapService
      .getAllCoins()
      .then((coinList) => {
        this.setState({
          coinList
        });
      })
  };

  renderItems(arr) {
    return arr.slice(0, 3).map((coin) => {
      console.log(arr.slice(0, 3))
      return (
        <div className="top-coins__item" key={coin.id}>
          <div className="top-coins__item-name">{coin.name}</div>
          <div className="top-coins__item-price">{`${parseFloat(coin.priceUsd).toFixed(3)}$`}</div>
        </div>
      );
    });
  };

  render() {

    const { coinList } = this.state;

    if (!coinList) {
      return 'lol'
    }

    const items = this.renderItems(coinList)

    return (
      <header className="header">
        <div className="container">
          <div className="container__inner">
            <div className="logo">
              <img src={logo} alt="Coincap"></img>
            </div>
            <div className="top-coins">
              {items}
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