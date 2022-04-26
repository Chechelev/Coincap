import React from "react";
import { HeaderTopCoins } from '../header-top-coins';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';

afterEach(() => {
  cleanup();
})

it('renders one element', () => {
  const items = [
    {
      id: 1,
      name: 'Bitcoin',
      priceUsd: 30000
    },
  ];

  render(<HeaderTopCoins items={items} hasErrored={false} ></HeaderTopCoins>);
  const headerTopCoinsElement = screen.getByTestId("headerTopCoins");
  const headerTopCoinsElementName = screen.getByTestId("headerTopCoins-name");
  const headerTopCoinsElementPrice = screen.getByTestId("headerTopCoins-price");
  expect(headerTopCoinsElement).toBeInTheDocument();
  expect(headerTopCoinsElementName).toHaveTextContent('Bitcoin');
  expect(headerTopCoinsElementPrice).toHaveTextContent(30000)
});


it('renders 3 top-coins elements correctly', () => {
  const items = [
    {
      id: 1,
      name: 'Bitcoin',
      priceUsd: 30000
    },
    {
      id: 2,
      name: 'Ethereum',
      priceUsd: 20000
    },
    {
      id: 3,
      name: 'Tether',
      priceUsd: 1000
    },
  ];

  render(<HeaderTopCoins items={items} hasErrored={false} ></HeaderTopCoins>);
  const headerTopCoinsElement = screen.getAllByTestId("headerTopCoins");
  expect(headerTopCoinsElement).toHaveLength(3);
});