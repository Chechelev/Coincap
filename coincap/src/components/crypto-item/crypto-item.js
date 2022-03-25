import React, { Component } from 'react';
import './crypto-item.scss';

export class CryptoItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Bitcoin</td>
        <td>$6929</td>
        <td>$834,52b</td>
        <td>$83,423.91</td>
        <td>18.99m</td>
        <td>$15,07b</td>
        <td>2.40%</td>
        <td className="crypto-add">
          <i className="fa-solid fa-plus"></i>
        </td>
      </tr>
    )
  }
} 
