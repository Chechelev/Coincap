import React, { Component } from 'react';
import './crypto-table.scss';
import { CryptoItem } from '../crypto-item/crypto-item';

export class CryptoTable extends Component {
  render() {
    return (
      <div className="container">
        <table>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Marcet Cap</th>
            <th>VWAP (24Hr)</th>
            <th>Supply</th>
            <th>Volume (24Hr)</th>
            <th>Change (24Hr)</th>
            <th></th>
          </tr>
          <CryptoItem></CryptoItem>
        </table>
      </div>
    )
  }
} 