import React, { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from '../layout/header/header';
import { CryptoTable } from '../pages/crypto-table-page/crypto-table/crypto-table';
import { CoinDetails } from '../pages/crypto-details-page/crypto-item-details/crypto-details';
import { Footer } from '../layout/footer/footer';
class App extends Component {

  //let [selectedCoin, setSelectedCon] = useState()
  state = {
    selectedCoin: localStorage.getItem('coinId') || null,
  }

  onCoinSelected = (id) => {
    this.setState({
      selectedCoin: id
    });
    localStorage.setItem('coinId', id);
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
