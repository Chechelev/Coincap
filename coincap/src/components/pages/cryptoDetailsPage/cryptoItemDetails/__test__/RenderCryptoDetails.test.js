import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { RenderCryptoDetails } from '../render-crypto-details';

afterEach(() => {
  cleanup();
});

test('renders element', () => {
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
  };

  render(<RenderCryptoDetails coin={coin} />);

  const cryptoDetailsElement = screen.getByTestId('cryptoDetailsTest');
  expect(cryptoDetailsElement).toBeInTheDocument();
});

test('renders element', () => {
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
  };

  render(<RenderCryptoDetails coin={coin} />);

  const cryptoDetailsElement = screen.getByTestId('cryptoDetailsTest');
  expect(cryptoDetailsElement).toBeInTheDocument();
});

test('checks element content', () => {
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
  };

  render(<RenderCryptoDetails coin={coin} />);

  const cryptoDetailsElement = screen.getByTestId('cryptoDetailsTest');
  const cryptoDetailsNameElement = screen.getByTestId('cryptoDetailsName');
  const cryptoDetailsDateElement = screen.getByTestId('cryptoDetailsDate');
  const cryptoDetailsChangeElement = screen.getByTestId('cryptoDetailsChange');
  const cryptoDetailsPriceElement = screen.getByTestId('cryptoDetailsPrice');
  let date = new Date().toDateString();

  expect(cryptoDetailsElement).toBeInTheDocument();
  expect(cryptoDetailsNameElement).toBeInTheDocument();
  expect(cryptoDetailsDateElement).toBeInTheDocument();
  expect(cryptoDetailsChangeElement).toBeInTheDocument();
  expect(cryptoDetailsPriceElement).toBeInTheDocument();

  expect(cryptoDetailsNameElement).toHaveTextContent('Bitcoin (BTC)');
  expect(cryptoDetailsDateElement).toHaveTextContent(date);
  expect(cryptoDetailsChangeElement).toHaveTextContent('Change -1.464%');
  expect(cryptoDetailsPriceElement).toHaveTextContent('Price 38913.205$');
});

test('checks change percent element', () => {
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
  };

  render(<RenderCryptoDetails coin={coin} />);

  const cryptoDetailsChangeElement = screen.getByTestId('cryptoDetailsChange');
  const cryptoDetailsChangeSpanElement = screen.getByTestId('change-green');

  expect(cryptoDetailsChangeElement).toBeInTheDocument();

  expect(cryptoDetailsChangeElement).toHaveTextContent('Change -1.464%');
  expect(cryptoDetailsChangeSpanElement).toHaveClass('change-red');
});

test('checks change percent element', () => {
  const coin = {
    changePercent24Hr: "1.4635052334880477",
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
  };

  render(<RenderCryptoDetails coin={coin} />);

  const cryptoDetailsChangeElement = screen.getByTestId('cryptoDetailsChange');
  const cryptoDetailsChangeSpanElement = screen.getByTestId('change-green');

  expect(cryptoDetailsChangeElement).toBeInTheDocument();

  expect(cryptoDetailsChangeElement).toHaveTextContent('Change 1.464%');
  expect(cryptoDetailsChangeSpanElement).toHaveClass('change-green');
});