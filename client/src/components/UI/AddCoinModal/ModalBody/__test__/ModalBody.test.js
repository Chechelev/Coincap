import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { ModalBody } from '../modal-body';

afterEach(() => {
  cleanup();
});

it('renders element', () => {
  const children = ['Bitcoin', 1000];
  const warning = false;

  render(<ModalBody children={children} warning={warning}></ModalBody>);
});

it('changes classname if the input value > 1000', () => {
  const children = ['Bitcoin', 1000];
  const warning = true;

  render(<ModalBody children={children} warning={warning}></ModalBody>);

  const modalBodyInputTest = screen.getByTestId('modalInputTest');
  expect(modalBodyInputTest).toBeInTheDocument();
  expect(modalBodyInputTest).toHaveClass('modal-body__item-amount-warning');
});

it('render modal email input', () => {
  const children = ['Bitcoin', 1000];
  const warning = false;

  render(<ModalBody children={children} warninig={warning}></ModalBody>);

  const modalBodyInputTest = screen.getByTestId('modalInputTest');
  expect(modalBodyInputTest).toBeInTheDocument();
  expect(modalBodyInputTest).toHaveAttribute("type", "number");
});


it('checks text content on the body', () => {
  const children = ['Bitcoin', 1000];
  const warning = false;

  render(<ModalBody children={children} warninig={warning}></ModalBody>);

  const modalBodyItemNameTest = screen.getByTestId('modalBodyItemNameTest');
  const modalBodyPriceTest = screen.getByTestId('modalBodyPriceTest');

  expect(modalBodyItemNameTest).toHaveTextContent('Bitcoin');

  const modalBodyInputTest = screen.getByTestId('modalInputTest');

  fireEvent.change(modalBodyInputTest, { target: { value: 1 } })
  expect(modalBodyInputTest.value).toBe("1");

  expect(modalBodyInputTest).not.toHaveClass('modal-body__item-amount-warning');

  expect(modalBodyPriceTest).toHaveTextContent(1000);
});



