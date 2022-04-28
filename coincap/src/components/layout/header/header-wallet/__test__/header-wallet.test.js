import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { HeaderWallet } from '../header-wallet';

afterEach(() => {
  cleanup();
  window.localStorage.clear();
})


it('renders element', () => {

  render(<HeaderWallet></HeaderWallet>);

  const userWalletElement = screen.getByTestId("user-wallet-info-test");
  expect(userWalletElement).toBeInTheDocument();
});

it('checks the current cost element', () => {
  const headerCoinCost = 544123.123543;

  render(<HeaderWallet headerCoinCost={headerCoinCost} ></HeaderWallet>);

  const userWalletElement = screen.getByTestId("user-wallet__current-cost-test");
  const userWalletDifferenceElement = screen.getByTestId("user-wallet__different-cost-test");

  expect(userWalletDifferenceElement).toBeInTheDocument();
  expect(userWalletElement).toBeInTheDocument();
  expect(userWalletElement).toHaveTextContent(544123.12)
});

it('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();

  render(<HeaderWallet showModal={handleClick} ></HeaderWallet>);
  const userWalletElement = screen.getByTestId("user-wallet__current-cost-test");

  fireEvent.click(userWalletElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

/*
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      console.log(store);
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

it('has data in local storage', () => {
  const jsonId = "walletData";
  const newJson = { id: "bitcoin", name: "Bitcoin", price: "39144.0257023189199431", amount: "1" };
  window.localStorage.setItem(jsonId, JSON.stringify(newJson));
  // run function
});
*/