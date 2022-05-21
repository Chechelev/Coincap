import React, { useState, useEffect } from 'react';
import { CoincapService } from '../../../../../services/CoincapService';
import { addWalletItem } from '../../../../wallet/walletItems/addWalletItem';
import { RenderCryptoTable } from '../RenderCryptoTable';
import { useQuery } from "@apollo/client";
import { coinInfoQuery } from "../../../../queries/coinInfoQuery";
import { Spinner } from '../../../../common/spinner/Spinner';

export function CryptoTable(props) {
  const coincapService = new CoincapService();

  let [selectedCoinID, setSelectedCoinID] = useState(null);
  let [selectedCoinName, setSelectedCoinName] = useState(null);
  let [selectedCoinPrice, setSelectedCoinPrice] = useState(null);
  let [show, setShow] = useState(false);
  let [warning, setWarning] = useState(false);

  let aaa = () => {
    let currentPage = +localStorage.getItem('page') != null ? +localStorage.getItem('page') : 0
    switch (currentPage) {
      case 1:
        currentPage = 0;
        return currentPage;
      case 2:
        currentPage = 20;
        return currentPage;
      case 3:
        currentPage = 40;
        return currentPage;
      case 4:
        currentPage = 60;
        return currentPage;
      case 5:
        currentPage = 80;
        return currentPage;
    }
  }

  let { loading, error, data, startPolling, stopPolling, refetch } = useQuery(coinInfoQuery, {
    variables: {
      offset: aaa(),
    },
  });

  useEffect(() => {
    startPolling(1000)
    return () => {
      stopPolling()
    }
  }, [startPolling, stopPolling]);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  const getCoinInfo = (id) => {
    coincapService
      .getCoin(id)
      .then((coin) => {
        setSelectedCoinID(selectedCoinID = coin)
      });
  };

  const handlePageClick = (item) => {
    localStorage.setItem('page', item.selected + 1);
    refetch({ offset: aaa() })
  };


  const showModal = (id, name, price) => {
    getCoinInfo(id); // сюда приспособить строку
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
      tableCoinList={data}
      showModal={showModal}
      submitModal={submitModal}
      onItemSelected={props.onItemSelected}
      show={show} warning={warning} handleClose={handleClose} handleSubmit={submitModal}
      selectedCoinName={selectedCoinName}
      selectedCoinPrice={selectedCoinPrice}>
    </RenderCryptoTable>
  );
};
