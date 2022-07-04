import React from 'react';
import { useState } from 'react';
import './WalletItems.scss';

import { RenderWalletItem } from './RenderWalletItem';

export function WalletItems() {

  let existingEntries = JSON.parse(localStorage.getItem("walletData"));
  if (existingEntries == null) existingEntries = [];

  const [coins, setCoins] = useState(JSON.parse(localStorage.getItem("walletData")));

  const handleDeleteElement = (index) => {
    const temp = [...coins];

    temp.splice(index, 1);
    setCoins(temp);

    existingEntries.splice(index, 1);
    localStorage.setItem("walletData", JSON.stringify(existingEntries));
  };

  return <RenderWalletItem existingEntries={existingEntries} handleDeleteElement={handleDeleteElement} />
};
