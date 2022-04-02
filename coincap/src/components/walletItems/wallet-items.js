import React, { Component } from 'react';
import { CoinDetails } from '../crypto-item-details/crypto-details';
import './wallet-items.scss';


export class WalletItems extends Component {

  state = {
    coins: JSON.parse(localStorage.getItem("walletData"))

  }

  handleDeleteElement = (index) => {
    this.setState(({ coins }) => {
      coins.splice(index, 1);
      return {
        coins: coins
      }
    });

    let existingEntries = JSON.parse(localStorage.getItem("walletData"));
    if (existingEntries == null) existingEntries = [];
    existingEntries.splice(index, 1)
    localStorage.setItem("walletData", JSON.stringify(existingEntries));
  };

  render() {

    let existingEntries = JSON.parse(localStorage.getItem("walletData"));
    if (existingEntries == null) existingEntries = [];

    return existingEntries.map((element, i) => {
      return (
        <div className="modal-body__item" key={element.id} >
          <div className="modal-body__item-name">{element.name}</div>
          <div className="modal-body__item-amount">{element.amount}</div>
          <div className="modal-body__item-total-price">{`${element.amount * parseFloat(element.price).toFixed(2)}`}</div>
          <div className="crypto-minus" onClick={() => this.handleDeleteElement(i)}>
            <i className="fa-solid fa-minus"></i>
          </div>
        </div >
      );
    });
  }
}

