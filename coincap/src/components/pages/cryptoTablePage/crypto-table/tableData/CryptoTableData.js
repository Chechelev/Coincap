import React, { useState, useEffect } from 'react';
import { addWalletItem } from '../../../../wallet/walletItems/addWalletItem';
import { RenderCryptoTable } from '../RenderCryptoTable';
import { useQuery } from "@apollo/client";
import { coinInfoQuery } from "../../../../queries/coinInfoQuery";
import { pageNumber } from '../tablePage/pageNumber';
import { Spinner } from '../../../../common/spinner/Spinner';

export function CryptoTable(props) {

  let [selectedCoinID, setSelectedCoinID] = useState(null);
  let [selectedCoinName, setSelectedCoinName] = useState(null);
  let [selectedCoinPrice, setSelectedCoinPrice] = useState(null);
  let [show, setShow] = useState(false);
  let [warning, setWarning] = useState(false);

  let { loading, error, data, startPolling, stopPolling, refetch } = useQuery(coinInfoQuery, {
    variables: {
      offset: pageNumber(),
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


  const handlePageClick = (item) => {
    localStorage.setItem('page', item.selected + 1);
    refetch({ offset: pageNumber() })
  };


  const showModal = (id, name, price) => {
    setShow(show = true);
    let setCoin = {
      id: id,
      name: name,
      priceUsd: price
    }
    setSelectedCoinID(selectedCoinID = setCoin)
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
