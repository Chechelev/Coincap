import React, { Component } from 'react';
import './App.scss';

import { Header } from '../header/header';
import { CryptoTable } from '../crypto-table/crypto-table';
import { Wallet } from '../wallet/wallet';
import { CoincapService } from '../../services/coincap-service'

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
