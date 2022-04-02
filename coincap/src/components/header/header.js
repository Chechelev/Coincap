import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './logo.svg';
import { CoincapService } from '../../services/coincap-service';
import { Spinner } from '../spinner/spinner';
import { Wallet } from '../wallet-modal-window/wallet-modal-window';
export class Header extends Component {

  coincapService = new CoincapService();

  state = {
    headerCoinList: null,
    show: false,
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

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { headerCoinList } = this.state;

    if (!headerCoinList) {
      return <Spinner />;
    }

    const items = this.renderItems(headerCoinList)

    return (
      <>
        <header className="header">
          <div className="container">
            <div className="container__inner">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Coincap"></img>
                </Link>
              </div>
              <div className="top-coins">
                {items}
              </div>

              <div className="user-wallet-info" onClick={this.showModal}>
                <div className="user-wallet__current-cost">134,32 USD</div>
                <div className="user-wallet__different-cost">+2,38</div>
                <div className="user-wallet__different-cost-percent">(+1,80%)</div>
                <i className="fa-solid fa-briefcase"></i>
              </div>

            </div>
          </div>
        </header>
        <Wallet show={this.state.show} handleClose={this.hideModal} />
      </>
    )
  }
} 