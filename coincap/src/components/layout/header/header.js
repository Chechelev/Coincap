import React, { useEffect, useState } from 'react';
import './header.scss';

import { CoincapService } from '../../../services/coincap-service';
import { Wallet } from '../../wallet/wallet-modal-window/wallet-modal-window';
import { HeaderTopCoins } from './header-top-coins/header-top-coins';
import { getCurrentCost } from './header-prices/header-prices';
import { HeaderWallet } from './header-wallet/header-wallet';
import { RenderHeaderLogo } from './header-logo/header-logo';

export function Header() {

  const coincapService = new CoincapService();

  let [headerCoinList, setHeaderCoinList] = useState({});
  let [headerCoinCost, setHeaderCoinCost] = useState({});
  let [show, setShow] = useState(false);

  const setCoins = () => {
    coincapService
      .getAllCoins()
      .then((headerCoinList) => {
        setHeaderCoinList(headerCoinList)
      });
  };

  const setCurrentCost = () => {
    getCurrentCost()
      .then((headerCoinCost) => {
        setHeaderCoinCost(headerCoinCost)
      });
  }

  useEffect(() => {
    setCoins();
    setCurrentCost();
    return () => {
      setHeaderCoinList({});
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins();
      setCurrentCost();
    }, 1000);
    return () => {
      setHeaderCoinList({});
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
            <div className="top-coins">
              <HeaderTopCoins headerCoinList={headerCoinList} />
            </div>
            <HeaderWallet showModal={showModal} headerCoinCost={headerCoinCost} />
          </div>
        </div>
      </header>
      <Wallet show={show} handleClose={hideModal} />
    </>
  );
};