import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { addWalletItem } from '../add-wallet-items';

afterEach(() => {
  cleanup();
});

test('checks addition of the element', () => {
  const coin = {
    changePercent24Hr: "-1.4635052334880477",
    id: "bitcoin",
    marketCapUsd: "740348046261.5493089162107500",
    maxSupply: "21000000.0000000000000000",
    name: "Bitcoin",
    priceUsd: "38913.2050201530466892",
    rank: "1",
    supply: "19025625.0000000000000000",
    symbol: "BTC",
    volumeUsd24Hr: "13856646101.4454933748319791",
    vwap24Hr: "39463.3232440936546063",
  }

  localStorage.setItem('submit', JSON.stringify(1));
  addWalletItem(coin);
  expect(localStorage.getItem('submit')).toBe('1');
  expect(localStorage.getItem('walletData')).toBe("[{\"id\":\"bitcoin\",\"name\":\"Bitcoin\",\"price\":\"38913.2050201530466892\",\"amount\":\"1\"}]");
});