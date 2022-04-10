import React from "react";
import { Spinner } from "../../../common/spinner/spinner";

export function HeaderTopCoins(props) {
  let data = Array.from(props.headerCoinList);

  if (!props.headerCoinList) {
    return <Spinner />;
  }
  return data.slice(0, 3).map(({ id, name, priceUsd }) => {
    return (
      <div className="top-coins__item" key={id}>
        <div className="top-coins__item-name">{name}</div>
        <div className="top-coins__item-price">{`${parseFloat(priceUsd).toFixed(3)}$`}</div>
      </div>
    );
  });
};