import React, { useState, useEffect } from 'react';
import { CoincapService } from '../../../../services/coincap-service';
import { addWalletItem } from '../../../wallet/wallet-items/add-wallet-items';
import { RenderCryptoDetails } from './render-crypto-details';
import './crypto-details.scss';

export function CoinDetails(props) {

  const coincapService = new CoincapService();
  let [coin, setCoin] = useState({});
  let [show, setShow] = useState(false);
  let [warning, setWarning] = useState(false);


  const showModal = () => {
    setShow(show = true);
  };

  const hideModal = () => {
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
      addWalletItem(coin);
    }
  };

  const getCoinInfo = () => {
    const coinId = props.coinId;
    coincapService
      .getCoin(coinId)
      .then((coin) => {
        setCoin(coin)
      })
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCoinInfo();
    }, 1000);
    return () => {
      setCoin({});
      clearInterval(interval);
    };
  }, []);

  return (
    <RenderCryptoDetails
      coin={coin}
      show={show}
      warning={warning}
      handleClose={hideModal}
      handleSubmit={submitModal}
      showModal={showModal}
      children={[coin.name, coin.priceUsd]}
    />
  )
}
