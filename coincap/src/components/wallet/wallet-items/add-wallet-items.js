import React from "react";

export const addWalletItem = (coin) => {
  let existingEntries = JSON.parse(localStorage.getItem("walletData"));
  if (existingEntries == null) existingEntries = [];

  const newItem = {
    id: coin.id,
    name: coin.name,
    price: coin.priceUsd,
    amount: localStorage.getItem('submit'),
  };

  localStorage.setItem('wallet', JSON.stringify(newItem));
  existingEntries.push(newItem);
  localStorage.setItem("walletData", JSON.stringify(existingEntries));
};