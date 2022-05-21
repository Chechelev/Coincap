import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../layout/header/Header';
import CryptoTable from '../pages/cryptoTablePage/crypto-table/tableData/CryptoTableData';
import { CoinDetails } from '../pages/cryptoDetailsPage/cryptoItemDetails/CoinDetails';
import { Footer } from '../layout/footer/Footer';

function App() {

  let [selectedCoin, setSelectedCon] = useState(localStorage.getItem('coinId') || null);
  const navigate = useNavigate();

  const onCoinSelected = (id) => {

    setSelectedCon(selectedCoin = id)
    localStorage.setItem('coinId', id);

    navigate('/details');
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
