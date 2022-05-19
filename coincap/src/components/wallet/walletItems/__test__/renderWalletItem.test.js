import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { RenderCoins } from '../render-wallet-items';

afterEach(() => {
  cleanup();
});

test('renders elemet', () => {
  const existingEntries = [
    { id: "bitcoin", name: "Bitcoin", price: "38953.6908005677844877", amount: "1" },
  ];

  render(<RenderCoins existingEntries={existingEntries}></RenderCoins>);
  const renderCoinsTest = screen.getByTestId('renderCoinsTest');
  expect(renderCoinsTest).toBeInTheDocument();

});


test('cheks the number of rendered elements', () => {
  const existingEntries = [
    { id: "bitcoin", name: "Bitcoin", price: "38953.6908005677844877", amount: "1" },
    { id: "bitcoin", name: "Bitcoin", price: "39144.0257023189199431", amount: "1" },
    { id: "bitcoin", name: "Bitcoin", price: "39230.1501994136423540", amount: "3" },
    { id: "dogecoin", name: "Dogecoin", price: "0.1403628942227408", amount: "100" },
  ];

  render(<RenderCoins existingEntries={existingEntries}></RenderCoins>);
  const renderCoinsTest = screen.getAllByTestId('renderCoinsTest');
  expect(renderCoinsTest).toHaveLength(existingEntries.length);

});


test('deletes the element', () => {
  let existingEntries = [
    { id: "Titcoin", name: "Bitcoin", price: "38953.6908005677844877", amount: "1" },
    { id: "bitcoin", name: "Bitcoin", price: "39144.0257023189199431", amount: "1" },
    { id: "bitcoin", name: "Bitcoin", price: "39230.1501994136423540", amount: "3" },
    { id: "dogecoin", name: "Dogecoin", price: "0.1403628942227408", amount: "100" },
  ];

  const handleDeleteElement = jest.fn();
  handleDeleteElement.mockImplementation(() => 0);

  render(<RenderCoins existingEntries={existingEntries} handleDeleteElement={handleDeleteElement}></RenderCoins>);
  const deleteWalletItemTest = screen.getAllByTestId('deleteWalletItemTest');

  fireEvent.click(deleteWalletItemTest[0]);
  expect(handleDeleteElement).toHaveBeenCalledTimes(1);
  expect(handleDeleteElement).toHaveBeenCalledWith(0);
});
