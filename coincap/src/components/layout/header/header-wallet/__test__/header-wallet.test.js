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

  const userWalletCurrentCostElement = screen.getByTestId("user-wallet__current-cost-test");

  expect(userWalletCurrentCostElement).toBeInTheDocument();
  expect(userWalletCurrentCostElement).toHaveTextContent(544123.12);

});

it('checks the diffrence cost element', () => {
  const headerCoinCost = 544123.123543;
  const walletData = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      price: "39144.0257023189199431",
      amount: "1"
    }
  ];

  localStorage.setItem('walletData', JSON.stringify(walletData));

  render(<HeaderWallet headerCoinCost={headerCoinCost} ></HeaderWallet>);

  const userWalletDifferenceElement = screen.getByTestId("user-wallet__different-cost-test");

  expect(userWalletDifferenceElement).toBeInTheDocument();
  expect(localStorage.getItem('walletData')).toBe("[{\"id\":\"bitcoin\",\"name\":\"Bitcoin\",\"price\":\"39144.0257023189199431\",\"amount\":\"1\"}]");
  expect(userWalletDifferenceElement).toHaveTextContent('+504979.1');

});


it('checks if the difference < 0', () => {
  const headerCoinCost = 54.123543;
  const walletData = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      price: "39144.0257023189199431",
      amount: "1"
    }
  ];

  localStorage.setItem('walletData', JSON.stringify(walletData));

  render(<HeaderWallet headerCoinCost={headerCoinCost} ></HeaderWallet>);

  const userWalletDifferenceElement = screen.getByTestId("user-wallet__different-cost-test");

  expect(userWalletDifferenceElement).toBeInTheDocument();
  expect(localStorage.getItem('walletData')).toBe("[{\"id\":\"bitcoin\",\"name\":\"Bitcoin\",\"price\":\"39144.0257023189199431\",\"amount\":\"1\"}]");
  expect(userWalletDifferenceElement).toHaveTextContent('-39089.90');

});

it('checks the percent', () => {
  const headerCoinCost = 54412.123543;
  const walletData = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      price: "39144.0257023189199431",
      amount: "1"
    }
  ];

  localStorage.setItem('walletData', JSON.stringify(walletData));

  render(<HeaderWallet headerCoinCost={headerCoinCost} ></HeaderWallet>);

  const userWalletPercentElement = screen.getByTestId("user-wallet__different-cost-percent");

  expect(userWalletPercentElement).toBeInTheDocument();
  expect(localStorage.getItem('walletData')).toBe("[{\"id\":\"bitcoin\",\"name\":\"Bitcoin\",\"price\":\"39144.0257023189199431\",\"amount\":\"1\"}]");
  expect(userWalletPercentElement).toHaveTextContent('28.06%');

});

it('checks the percent', () => {
  const headerCoinCost = 30412.123543;
  const walletData = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      price: "39144.0257023189199431",
      amount: "1"
    }
  ];

  localStorage.setItem('walletData', JSON.stringify(walletData));

  render(<HeaderWallet headerCoinCost={headerCoinCost} ></HeaderWallet>);

  const userWalletPercentElement = screen.getByTestId("user-wallet__different-cost-percent");

  expect(userWalletPercentElement).toBeInTheDocument();
  expect(localStorage.getItem('walletData')).toBe("[{\"id\":\"bitcoin\",\"name\":\"Bitcoin\",\"price\":\"39144.0257023189199431\",\"amount\":\"1\"}]");
  expect(userWalletPercentElement).toHaveTextContent('-28.71%');

});

it('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();

  render(<HeaderWallet showModal={handleClick} ></HeaderWallet>);
  const userWalletElement = screen.getByTestId("user-wallet__current-cost-test");

  fireEvent.click(userWalletElement);
  expect(handleClick).toHaveBeenCalledTimes(1);

});
