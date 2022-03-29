import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from '../header/header';
import { Wallet } from '../wallet-modal-window/wallet-modal-window';
import { CryptoTable } from '../crypto-table/crypto-table';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<CryptoTable />} />
        </Routes>
        <Wallet />
      </div>
    );
  }
}

export default App;
