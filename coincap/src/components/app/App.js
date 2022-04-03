import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from '../header/header';
import { CryptoTable } from '../crypto-table/crypto-table';
import { CoinDetails } from '../crypto-item-details/crypto-details';
import { Footer } from '../footer/footer'
class App extends Component {

  state = {
    selectedCoin: null,
  }

  onCoinSelected = (id) => {
    this.setState({
      selectedCoin: id
    });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<CryptoTable onItemSelected={this.onCoinSelected} />} />
          <Route path="/details" element={<CoinDetails coinId={this.state.selectedCoin} />} />
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
