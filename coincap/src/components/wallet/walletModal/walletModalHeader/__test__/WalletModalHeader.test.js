import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { WalletModalHeader } from '../wallet-modal-header';

afterEach(() => {
  cleanup();
});

it('renders element', () => {

  render(<WalletModalHeader></WalletModalHeader>);

  const modalHeaderTestElement = screen.getByTestId("modalHeaderTest");
  expect(modalHeaderTestElement).toBeInTheDocument();
});

it('checks close button', () => {
  const handleClick = jest.fn();

  render(<WalletModalHeader handleClose={handleClick} ></WalletModalHeader>);

  const closeTestElement = screen.getByTestId("closeTest");

  expect(closeTestElement).toBeInTheDocument();
  fireEvent.click(closeTestElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});