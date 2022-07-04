import React, { useState, useEffect } from 'react';
import { Spinner } from '../../components/UI/Spinner/Spinner';
import { addWalletItem } from '../../components/wallet/WalletItems/addWalletItem';
import { RenderCryptoDetails } from './RenderCryptoDetails';
import { useQuery } from "@apollo/client";
import { coinDetailsQuery } from '../../queries/coinDetailsQuery';
import './CryptoDetails.scss';

export function CoinDetails(props) {

  let [show, setShow] = useState(false);
  let [warning, setWarning] = useState(false);

  let { loading, error, data, startPolling, stopPolling } = useQuery(coinDetailsQuery, {
    variables: {
      id: props.coinId,
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

  const showModal = () => {
    setShow(show = true);
  };

  const hideModal = () => {
    setShow(show = false);
    setWarning(warning = false);
  };

  const submitModal = () => {
    let coin = data.coin.data;

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
      addWalletItem(coin);
    }
  };

  return (
    <RenderCryptoDetails
      coin={data}
      show={show}
      warning={warning}
      handleClose={hideModal}
      handleSubmit={submitModal}
      showModal={showModal}
    />
  )
}
