import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { RenderCryptoTable } from '../render-crypto-table';

afterEach(() => {
  cleanup();
});


it('renders element', () => {
  const tableCoinList = {
    changePercent24Hr: "1.9595794171735721",
    explorer: "https://blockchain.info/",
    id: "bitcoin",
    marketCapUsd: "759397303531.9629636660271083",
    maxSupply: "21000000.0000000000000000",
    name: "Bitcoin",
    priceUsd: "39916.0080702719225243",
    rank: "1",
    supply: "19024881.0000000000000000",
    symbol: "BTC",
    volumeUsd24Hr: "13598295703.4723010068265264",
    vwap24Hr: "39553.2497550860053673",
  }

  render(<RenderCryptoTable tableCoinList={tableCoinList}></RenderCryptoTable>);

  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
});

it('renders one element of the table', () => {
  const tableCoinList = [{
    changePercent24Hr: "1.9595794171735721",
    explorer: "https://blockchain.info/",
    id: "bitcoin",
    marketCapUsd: "759397303531.9629636660271083",
    maxSupply: "21000000.0000000000000000",
    name: "Bitcoin",
    priceUsd: "39916.0080702719225243",
    rank: "1",
    supply: "19024881.0000000000000000",
    symbol: "BTC",
    volumeUsd24Hr: "13598295703.4723010068265264",
    vwap24Hr: "39553.2497550860053673",
  }]

  render(<RenderCryptoTable tableCoinList={tableCoinList}></RenderCryptoTable>);

  const tableBody = screen.getByTestId("tbody");
  const tableItem = screen.getByTestId('tableItem')

  expect(tableBody).toBeInTheDocument();
  expect(tableBody).toContainElement(tableItem);
  expect(tableBody.children).toHaveLength(1);
});

it('checks the content of the table element', () => {
  const tableCoinList = [
    {
      changePercent24Hr: "1.9595794171735721",
      explorer: "https://blockchain.info/",
      id: "bitcoin",
      marketCapUsd: "759397303531.9629636660271083",
      maxSupply: "21000000.0000000000000000",
      name: "Bitcoin",
      priceUsd: "39916.0080702719225243",
      rank: "1",
      supply: "19024881.0000000000000000",
      symbol: "BTC",
      volumeUsd24Hr: "13598295703.4723010068265264",
      vwap24Hr: "39553.2497550860053673",
    },
  ]

  render(<RenderCryptoTable tableCoinList={tableCoinList}></RenderCryptoTable>);

  const rows = screen.getAllByTestId('tableItem');
  expect(rows).toHaveLength(1);

  const cells = screen.getAllByTestId('tableColumn');
  expect(cells).toHaveLength(3);
  expect(cells[0]).toHaveTextContent(tableCoinList[0].rank);
  expect(cells[1]).toHaveTextContent(tableCoinList[0].name);
  expect(cells[2]).toHaveTextContent(`${parseFloat(tableCoinList[0].priceUsd).toFixed(3)}$`);

});

it('renders several elements of the table', () => {
  const tableCoinList = [
    {
      changePercent24Hr: "1.9595794171735721",
      explorer: "https://blockchain.info/",
      id: "bitcoin",
      marketCapUsd: "759397303531.9629636660271083",
      maxSupply: "21000000.0000000000000000",
      name: "Bitcoin",
      priceUsd: "39916.0080702719225243",
      rank: "1",
      supply: "19024881.0000000000000000",
      symbol: "BTC",
      volumeUsd24Hr: "13598295703.4723010068265264",
      vwap24Hr: "39553.2497550860053673",
    },
    {
      changePercent24Hr: "2.1267714503432137",
      explorer: "https://etherscan.io/",
      id: "ethereum",
      marketCapUsd: "354152451923.9701646798048233",
      maxSupply: null,
      name: "Ethereum",
      priceUsd: "2937.4296741160206092",
      rank: "2",
      supply: "120565423.2490000000000000",
      symbol: "ETH",
      volumeUsd24Hr: "9437238172.1339607619837440",
      vwap24Hr: "2919.0610272127738189",
    },
    {
      changePercent24Hr: "-0.0078650815143469",
      explorer: "https://www.omniexplorer.info/asset/31",
      id: "tether",
      marketCapUsd: "83227966632.4620093612755415",
      maxSupply: null,
      name: "Tether",
      priceUsd: "1.0009030297762565",
      rank: "3",
      supply: "83152877108.4516800000000000",
      symbol: "USDT",
      volumeUsd24Hr: "26875220251.0376684188328651",
      vwap24Hr: "1.0001715406675260",
    },
  ];

  render(<RenderCryptoTable tableCoinList={tableCoinList}></RenderCryptoTable>);

  const tableBody = screen.getByTestId("tbody");

  expect(tableBody).toBeInTheDocument();
  expect(tableBody.children).toHaveLength(3);

  const rows = screen.getAllByTestId('tableItem');
  expect(rows).toHaveLength(3);

  const cells = screen.getAllByTestId('tableColumn');
  expect(cells).toHaveLength(9);

});
