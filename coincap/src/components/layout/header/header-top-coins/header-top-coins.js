import React from "react";

export function HeaderTopCoins(props) {
  const { hasErrored, items } = props.HeaderTopCoins;
  let data = Array.from(items);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
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