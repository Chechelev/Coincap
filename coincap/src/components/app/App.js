import React, { Component } from 'react';

import { Header } from '../header/header';
import { Wallet } from '../wallet-modal-window/wallet-modal-window';
import { CryptoTable } from '../crypto-table/crypto-table';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <CryptoTable></CryptoTable>
        <Wallet></Wallet>
      </div>
    );
  }
}

export default App;
