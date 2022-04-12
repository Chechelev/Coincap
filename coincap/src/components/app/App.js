import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../layout/header/header';
import CryptoTable from '../pages/crypto-table-page/crypto-table/table-data/crypto-table-data';
import { CoinDetails } from '../pages/crypto-details-page/crypto-item-details/crypto-details';
import { Footer } from '../layout/footer/footer';

function App() {

  let [selectedCoin, setSelectedCon] = useState(localStorage.getItem('coinId') || null)

  const onCoinSelected = (id) => {
    setSelectedCon(selectedCoin = id)
    localStorage.setItem('coinId', id);
  };

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<CryptoTable onItemSelected={onCoinSelected} />} />
        <Route path="/details" element={<CoinDetails coinId={selectedCoin} />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
