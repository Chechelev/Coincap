import React, { useEffect, useState } from 'react';
import './header.scss';

import { Wallet } from '../../wallet/wallet-modal-window/wallet-modal-window';
import { HeaderTopCoins } from './header-top-coins/header-top-coins';
import { getCurrentCost } from './header-prices/header-prices';
import { HeaderWallet } from './header-wallet/header-wallet';
import { RenderHeaderLogo } from './header-logo/header-logo';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../../actions/items';

function Header(props) {
  let [headerCoinCost, setHeaderCoinCost] = useState({});
  let [show, setShow] = useState(false);

  const setCoins = () => {
    props.fetchData('https://api.coincap.io/v2/assets');
  };

  const setCurrentCost = () => {
    getCurrentCost()
      .then((headerCoinCost) => {
        setHeaderCoinCost(headerCoinCost)
      });
  };

  useEffect(() => {
    setCoins();
    setCurrentCost();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins();
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
            <div className="top-coins">
              <HeaderTopCoins HeaderTopCoins={props} />
            </div>
            <HeaderWallet showModal={showModal} headerCoinCost={headerCoinCost} />
          </div>
        </div>
      </header>
      <Wallet show={show} handleClose={hideModal} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);