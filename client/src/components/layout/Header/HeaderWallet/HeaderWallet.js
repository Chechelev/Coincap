import React from "react";

import { getLocaleCost } from '../HeaderPrices/HeaderPrices';

import './HeaderWallet.scss';

export function HeaderWallet({ headerCoinCost, showModal }) {

  let currentCost = headerCoinCost;
  const localeCost = getLocaleCost();
  const difference = parseFloat(currentCost - localeCost).toFixed(2);
  const diff = difference > 0 ? '+' + (difference) : (difference);
  let percent = parseFloat(((localeCost - currentCost)) / localeCost * 100).toFixed(2);
  let totalPercent = (difference < 0 ? - percent : (-1) * (percent));

  return (
    <div data-testid="user-wallet" className="user-wallet" onClick={showModal}>
      <div data-testid="user-wallet__current-cost" className="user-wallet__current-cost">{parseFloat(currentCost).toFixed(2)} $</div>
      <div data-testid="user-wallet__difference" className="user-wallet__difference">{`${diff == NaN ? 0 : diff}`}</div>
      <div data-testid="user-wallet__percent" className="user-wallet__percent">{(isNaN(percent) || percent == Infinity || percent == -Infinity) ? 0 : totalPercent}%</div>
      <i className="fa-solid fa-briefcase"></i>
    </div>
  )
};