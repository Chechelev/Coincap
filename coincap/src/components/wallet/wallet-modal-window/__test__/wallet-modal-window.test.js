import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { Wallet } from '../wallet-modal-window';

afterEach(() => {
  cleanup();
});

it('shows wallet modal', () => {
  const handleClick = jest.fn();

  render(<Wallet showModal={handleClick} show={true}></Wallet>);
  const modalTestElement = screen.getByTestId('modalTest');
  expect(modalTestElement).toBeInTheDocument();
  expect(modalTestElement).toHaveClass('modal modal-active');

});
