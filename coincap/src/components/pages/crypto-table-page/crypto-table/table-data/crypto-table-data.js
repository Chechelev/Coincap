import React, { useState, useEffect } from 'react';

import { CoincapService } from '../../../../../services/coincap-service';
import { addWalletItem } from '../../../../wallet/wallet-items/add-wallet-items';
import { RenderCryptoTable } from '../render-crypto-table';

export function CryptoTable(props) {

  const coincapService = new CoincapService();

  let [tableCoinList, setTableCoinList] = useState({});
  let [selectedCoinID, setSelectedCoinID] = useState(null);
  let [selectedCoinName, setSelectedCoinName] = useState(null);
  let [selectedCoinPrice, setSelectedCoinPrice] = useState(null);
  let [show, setShow] = useState(false);
  let [warning, setWarning] = useState(false);

  const getCoinsInfo = () => {
    coincapService
      .getCoinsPerPage()
      .then((tableCoinList) => {
        setTableCoinList(tableCoinList)
      });
  };

  useEffect(() => {
    getCoinsInfo();
    return () => {
      setTableCoinList({});
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getCoinsInfo();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getCoinInfo = (id) => {
    coincapService
      .getCoin(id)
      .then((coin) => {
        setSelectedCoinID(selectedCoinID = coin)
      });
  };

  const handlePageClick = (data) => {
    localStorage.setItem('page', data.selected + 1);
    coincapService
      .getCoinsPerPage(data.selected + 1)
      .then((table) => {
        setTableCoinList(tableCoinList = table)
      });
  };

  const showModal = (id, name, price) => {
    getCoinInfo(id);
    setShow(show = true);
    setSelectedCoinName(selectedCoinName = name);
    setSelectedCoinPrice(selectedCoinPrice = price);
  };

  const handleClose = () => {
    setShow(show = false);
    setWarning(warning = false);
  };

  const submitModal = () => {
    if (localStorage.getItem('submit') == 0) {
      alert('Please enter a bigger amount');
      setWarning(warning = true);
    }
    else if (localStorage.getItem('submit') > 1000) {
      alert('You can buy only 999 coins per time');
      setWarning(warning = true);
    }
    else {
      setShow(show = false);
      setWarning(warning = false);
      addWalletItem(selectedCoinID);
    }
  };

  return (
    <RenderCryptoTable
      handlePageClick={handlePageClick}
      tableCoinList={tableCoinList}
      showModal={showModal}
      submitModal={submitModal}
      onItemSelected={props.onItemSelected}
      show={show} warning={warning} handleClose={handleClose} handleSubmit={submitModal}
      selectedCoinName={selectedCoinName}
      selectedCoinPrice={selectedCoinPrice}>
    </RenderCryptoTable>
  );
};
