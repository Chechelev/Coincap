import React, { Component } from 'react';
import './header.scss';
import logo from './logo.svg';
import { CoincapService } from '../../services/coincap-service';
import { Spinner } from '../spinner/spinner';
export class Header extends Component {

  coincapService = new CoincapService();

  state = {
    headerCoinList: null
  };


  componentDidMount() {
    this.updateData();
    this.interval = setInterval(this.updateData, 10000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  updateData = () => {
    this.coincapService
      .getAllCoins()
      .then((headerCoinList) => {
        this.setState({
          headerCoinList
        });
      })
  }

  renderItems(arr) {
    return arr.slice(0, 3).map(({ id, name, priceUsd }) => {
      return (
        <div className="top-coins__item" key={id}>
          <div className="top-coins__item-name">{name}</div>
          <div className="top-coins__item-price">{`${parseFloat(priceUsd).toFixed(3)}$`}</div>
        </div>
      );
    });
  };

  render() {
    const { headerCoinList } = this.state;

    if (!headerCoinList) {
      return <Spinner />;
    }

    const items = this.renderItems(headerCoinList)

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