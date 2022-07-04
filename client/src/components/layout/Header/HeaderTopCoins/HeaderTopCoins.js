import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";

import { coinInfoHeader } from "../../../../queries/coinInfoHeader";
import './HeaderTopCoins.scss';

export function HeaderTopCoins() {

  let { loading, error, data, startPolling, stopPolling } = useQuery(coinInfoHeader);

  useEffect(() => {
    startPolling(1000)
    return () => {
      stopPolling()
    }
  }, [startPolling, stopPolling])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="top-coins">
      {data.coins.data.slice(0, 3).map(({ id, name, priceUsd }) =>
        <div data-testid="headerTopCoins" className="top-coins__item" key={id}>
          <div data-testid="headerTopCoins-name" className="top-coins__item-name">{name}</div>
          <div data-testid="headerTopCoins-price" className="top-coins__item-price">{`${parseFloat(priceUsd).toFixed(3)}$`}</div>
        </div>
      )
      }
    </div>
  )
};

