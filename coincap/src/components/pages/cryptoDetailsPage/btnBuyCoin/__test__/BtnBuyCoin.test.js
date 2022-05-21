import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import BuyBtn from '../btn-buy-coin';

afterEach(() => {
  cleanup();
});

test('renders element', () => {
  render(<BuyBtn></BuyBtn>);

  const cryptoDetailsRightTest = screen.getByTestId("cryptoDetailsRightTest");
  expect(cryptoDetailsRightTest).toBeInTheDocument();
});

test('checks btnBuyCoin element for context', () => {
  render(<BuyBtn></BuyBtn>);

  const btnBuyCoin = screen.getByTestId("btnBuyCoin");

  expect(btnBuyCoin).toBeInTheDocument();
  expect(btnBuyCoin).toHaveTextContent('buy');
  expect(btnBuyCoin).toHaveAttribute("type", "button");
});

test('checks clik event', () => {
  const handleClick = jest.fn();

  render(<BuyBtn buyCoin={handleClick}></BuyBtn>);

  const btnBuyCoin = screen.getByTestId("btnBuyCoin");

  expect(btnBuyCoin).toBeInTheDocument();
  fireEvent.click(btnBuyCoin);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
