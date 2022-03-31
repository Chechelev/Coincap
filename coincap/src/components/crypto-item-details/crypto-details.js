import React, { Component } from 'react';
import { CoincapService } from '../../services/coincap-service';
import { Spinner } from '../spinner/spinner';
import TradingViewWidget from 'react-tradingview-widget';
import { Button } from '../btn-buy-coin/btn-buy-coin';

import './crypto-details.scss';
export class CoinDetails extends Component {

  coinCap = new CoincapService();

  state = {
    coin: 'bitcoin',
    changeClass: null,
  };

  componentDidMount() {
    this.updateCoin();
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

  render() {
    let date = new Date().toDateString();

    if (!this.state.coin) {
      return <Spinner />;
    };

    const { symbol, name, priceUsd, changePercent24Hr } = this.state.coin;

    return (
      <div className="crypto-details">
        <div className="container">
          <div className="crypto-details__container">

            <div className="crypto-details__left">
              <div className="crypto-details__name">{name} ({symbol})</div>
              <div className="crypto-details__date">{date}</div>
            </div>

            <div className="crypto-details__middle">
              <div className="crypto-details__change">Change <span className={changePercent24Hr >= 0 ? 'change-green' : 'change-red'}>{`${parseFloat(changePercent24Hr).toFixed(3)}%`}</span></div>
              <div className="crypto-details__price">Price <span>{`${parseFloat(priceUsd).toFixed(3)}$`}</span></div>
            </div>

            <Button />
          </div>

          <div className="crypto-details__graphic">
            <TradingViewWidget
              symbol={`${symbol}USD`}
              autosize={true}
              interval="D"
              timezone="Etc/UTC"
              theme="Light"
              style={1}
              locale='en'
              toolbar_bg="#f1f3f6"
              enable_publishing={false}
              hide_top_toolbar={true}
              save_image={false}
              container_id="tradingview_60d45"
              visual_order={false}
            />
          </div>
        </div>
      </div>
    )
  }
}