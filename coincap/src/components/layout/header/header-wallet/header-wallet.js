import React from "react";
import { getLocaleCost } from '../header-prices/header-prices';

export function HeaderWallet(props) {

  let currentCost = props.headerCoinCost;
  const localeCost = getLocaleCost();
  const difference = parseFloat(currentCost - localeCost).toFixed(2);
  const diff = difference > 0 ? '+' + (difference) : (difference);
  let percent = parseFloat(((diff) * 100) / currentCost).toFixed(2);
  let totalPercent = (percent < 0 ? + percent : "" + percent);

  return (
    <div className="user-wallet-info" onClick={props.showModal}>
      <div className="user-wallet__current-cost">{parseFloat(currentCost).toFixed(2)} $</div>
      <div className="user-wallet__different-cost">{`${diff == NaN ? 0 : diff}`}</div>
      <div className="user-wallet__different-cost-percent">{(isNaN(percent) || percent == Infinity) ? 0 : totalPercent}%</div>
      <i className="fa-solid fa-briefcase"></i>
    </div>
  )
};