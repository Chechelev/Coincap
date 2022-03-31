import React, { Component } from 'react';
import { CoincapService } from '../../services/coincap-service';
import { Spinner } from '../spinner/spinner';
import './crypto-details.scss';
export class CoinDetails extends Component {

  coinCap = new CoincapService();

  state = {
    coin: 'bitcoin',
    history: 'bitcoin'
  };

  componentDidMount() {
    this.updateCoin();
    this.getAveragePrice();
  }

  componentDidUpdate(prevProps) {
    if (this.props.coinId !== prevProps.coinId) {
      this.updateCoin();
    }
  }

  updateCoin() {
    const { coinId } = this.props;
    if (!coinId) {
      return;
    }
    this.coinCap
      .getCoin(coinId)
      .then((coin) => {
        this.setState({ coin })
      })
  }

  getAveragePrice() {
    const { coinId } = this.props;
    if (!coinId) {
      return;
    }
    this.coinCap
      .getCoinHistory(coinId)
      .then((history) => {
        this.setState({ history })
      })
  }

  render() {

    if (!this.state.coin) {
      return <Spinner />;
    }

    const {
      name, priceUsd, symbol
    } = this.state.coin;


    const {
      time
    } = this.state.history;


    return (
      <div className="crypto-details">
        <div className="container">
          <div className="crypto-details__container">
            <div className="crypto-details__left">
              <div className="crypto-details__name pad">{name} ({symbol})</div>
              <div className="crypto-details__time pad">время</div>
            </div>

            <div className="crypto-details__middle">
              <div className="crypto-details__high-price pad">High <span></span></div>
              <div className="crypto-details__low-price pad">Low <span></span> </div>
            </div>

            <div className="crypto-details__right">
              <div className="crypto-details__average-price pad ">Average <span>{`${parseFloat(111234).toFixed(3)}$`}</span></div>
              <div className="crypto-details__current-price pad">Current <span>{`${parseFloat(priceUsd).toFixed(3)}$`}</span></div>
            </div>

            <div className="crypto-details__graphic">

            </div>
          </div>
        </div>
      </div>
    )
  }
}