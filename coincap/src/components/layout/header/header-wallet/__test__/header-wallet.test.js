import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
require('jest-localstorage-mock');
import { HeaderWallet } from '../header-wallet';

afterEach(() => {
  cleanup()
})


it('renders element', () => {
  const headerCoinCost = 544123.123543;

  render(<HeaderWallet headerCoinCost={headerCoinCost} onClick={true ? true : false} ></HeaderWallet>);

  const userWalletElement = screen.getByTestId("user-wallet-info-test");
  expect(userWalletElement).toBeInTheDocument();
});

it('checks the current cost element', () => {
  const headerCoinCost = 544123.123543;

  render(<HeaderWallet headerCoinCost={headerCoinCost} onClick={true ? true : false} ></HeaderWallet>);
  const userWalletElement = screen.getByTestId("user-wallet__current-cost-test");

  const userWalletDifferenceElement = screen.getByTestId("user-wallet__different-cost-test");
  expect(userWalletDifferenceElement).toBeInTheDocument();

  expect(userWalletElement).toBeInTheDocument();
  expect(userWalletElement).toHaveTextContent(544123.12);
});


it('checks the locale cost element', () => {
  const headerCoinCost = 544123.123543;

  const KEY = "walletData",
    VALUE = '[{"id":"bitcoin","name":"Bitcoin","price":"38953.6908005677844877","amount":"1"}]';

  render(<HeaderWallet headerCoinCost={headerCoinCost} onClick={true ? true : false} ></HeaderWallet>);

  const userWalletDifferenceElement = screen.getByTestId("user-wallet__different-cost-test");
  expect(userWalletDifferenceElement).toBeInTheDocument();

  dispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(1);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);

  expect(userWalletDifferenceElement).toHaveTextContent(544123.12);
});
