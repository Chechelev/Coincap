import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { coinInfoHeader } from "../../../queries/coinInfoHeader";

export function HeaderTopCoins() {

  let { loading, error, data, startPolling, stopPolling } = useQuery(coinInfoHeader);

  useEffect(() => {
    startPolling(5000)
    return () => {
      stopPolling()
    }
  }, [startPolling, stopPolling])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return data.coins.data.slice(0, 3).map(({ id, name, priceUsd }) => {
    return (
      <div data-testid="headerTopCoins" className="top-coins__item" key={id}>
        <div data-testid="headerTopCoins-name" className="top-coins__item-name">{name}</div>
        <div data-testid="headerTopCoins-price" className="top-coins__item-price">{`${parseFloat(priceUsd).toFixed(3)}$`}</div>
      </div>
    );
  });
};
