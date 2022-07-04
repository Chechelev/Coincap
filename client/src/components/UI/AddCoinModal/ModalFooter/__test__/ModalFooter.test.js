import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { ModalFooter } from '../modal-footer';

afterEach(() => {
  cleanup();
});

it('renders modal buy btn', () => {
  const handleClick = jest.fn();

  render(<ModalFooter handleSubmit={handleClick}></ModalFooter>);
  const modalFooterBtnTestElement = screen.getByTestId("modalFooterBtnTest");
  expect(modalFooterBtnTestElement).toBeInTheDocument();

});

it('cheks submit of the button', () => {
  const handleClick = jest.fn();

  render(<ModalFooter handleSubmit={handleClick}></ModalFooter>);
  const modalFooterBtnTestElement = screen.getByTestId("modalFooterBtnTest");

  fireEvent.click(modalFooterBtnTestElement)
  expect(handleClick).toHaveBeenCalledTimes(1)

});