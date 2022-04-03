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
    headerCoinCost: [],
    show: false,
  };


  componentDidMount() {
    this.updateData();
    this.getCurrentCost();
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

  getLocaleCost() {
    let localCostArr = [];
    let sum = 0;

    let existingEntries = JSON.parse(localStorage.getItem("walletData"));
    if (existingEntries == null) existingEntries = [];

    console.log(existingEntries)
    existingEntries.map(el => {
      localCostArr.push(el.price * el.amount)
    });

    for (let i = 0; i < localCostArr.length; i++) {
      sum += +localCostArr[i];
    }

    console.log('локальная ' + sum)
    return sum;
  }

  getCurrentCost() {
    let existingEntries = JSON.parse(localStorage.getItem("walletData"));
    if (existingEntries == null) existingEntries = [];

    existingEntries.map(el => {
      this.coincapService
        .getCoin(el.id)
        .then((headerCoinCost) => {
          this.setState({
            headerCoinCost
          });
        });
    });
  }

  render() {
    const { headerCoinList, headerCoinCost } = this.state;

    if (!headerCoinList) {
      return <Spinner />;
    }

    const items = this.renderItems(headerCoinList);
    const localeCost = this.getLocaleCost();
    const currentCost = this.getCurrentCost();
    const difference = parseFloat(localeCost - currentCost).toFixed(2);
    const diff = difference > 0 ? '+' + (difference) : (difference);
    const percent = parseFloat((100 * difference) / currentCost).toFixed(2);

    headerCoinCost.forEach((el) => {
      arr.push(el.priceUsd)
    })

    console.log("prices " + currentCost)

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
                <div className="user-wallet__current-cost">{parseFloat(localeCost).toFixed(3)} $</div>
                <div className="user-wallet__different-cost">{`${diff == NaN ? diff : 0}`}</div>
                <div className="user-wallet__different-cost-percent">{percent == NaN ? percent : 0}%</div>
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