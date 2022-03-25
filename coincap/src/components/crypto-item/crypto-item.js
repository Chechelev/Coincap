import React, { Component } from 'react';
import './crypto-item.scss';
import { CoincapService } from '../../services/coincap-service';
import { Spinner } from '../spinner/spinner';

export class CryptoItem extends Component {
  coincapService = new CoincapService();

  state = {
    tableCoinList: null
  };


  componentDidMount() {
    this.updateData();
    this.interval = setInterval(this.updateData, 5000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  updateData = () => {
    this.coincapService
      .getAllCoins()
      .then((tableCoinList) => {
        this.setState({
          tableCoinList
        });
      })
  }

  renderItems(arr) {
    return arr.map(({ rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr }) => {
      return (
        <tr>
          <td>{rank}</td>
          <td>{name}</td>
          <td>{`$${parseFloat(priceUsd).toFixed(3)}`}</td>
          <td>{`$${parseFloat(marketCapUsd / 1000000000).toFixed(2)}b`}</td>
          <td>{`$${parseFloat(vwap24Hr).toFixed(2)}`}</td>
          <td>{`${parseFloat(supply / 1000000).toFixed(2)}m`}</td>
          <td>{`${parseFloat(volumeUsd24Hr / 1000000).toFixed(2)}m`}</td>
          <td>{`${parseFloat(changePercent24Hr).toFixed(2)}%`}</td>
          <td className="crypto-add">
            <i className="fa-solid fa-plus"></i>
          </td>
        </tr>
      );
    });
  };

  render() {
    const { tableCoinList } = this.state;

    if (!tableCoinList) {
      return <Spinner />;
    }

    const items = this.renderItems(tableCoinList)
    return (
      <tbody>
        {items}
      </tbody>
    )
  }
} 
