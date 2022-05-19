import React from "react";

export function HeaderTopCoins({ items, hasErrored }) {

  let data = Array.from(items);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  return data.slice(0, 3).map(({ id, name, priceUsd }) => {
    return (
      <div data-testid="headerTopCoins" className="top-coins__item" key={id}>
        <div data-testid="headerTopCoins-name" className="top-coins__item-name">{name}</div>
        <div data-testid="headerTopCoins-price" className="top-coins__item-price">{`${parseFloat(priceUsd).toFixed(3)}$`}</div>
      </div>
    );
  });
};