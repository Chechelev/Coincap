import React, { useEffect, useState } from 'react';
import './Header.scss';

import { WalletModal } from '../../wallet/WalletModal/WalletModal';
import { HeaderTopCoins } from './HeaderTopCoins/HeaderTopCoins';
import { getCurrentCost } from './HeaderPrices/HeaderPrices';
import { HeaderWallet } from './HeaderWallet/HeaderWallet';
import { RenderHeaderLogo } from './HeaderLogo/HeaderLogo';

export function Header() {
  let [headerCoinCost, setHeaderCoinCost] = useState({});
  let [show, setShow] = useState(false);

  const setCurrentCost = () => {
    getCurrentCost()
      .then((headerCoinCost) => {
        setHeaderCoinCost(headerCoinCost)
      });
  };

  useEffect(() => {
    setCurrentCost();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCost();
    }, 1000);
    return () => {
      setHeaderCoinCost({});
      clearInterval(interval);
    };
  }, []);

  const showModal = () => {
    setShow(show = true);
  };

  const hideModal = () => {
    setShow(show = false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="container__inner">
            <RenderHeaderLogo />
            <HeaderTopCoins />
            <HeaderWallet showModal={showModal} headerCoinCost={headerCoinCost} />
          </div>
        </div>
      </header>
      <WalletModal show={show} handleClose={hideModal} />
    </>
  );
};

