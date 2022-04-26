import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { HeaderWallet } from '../header-wallet';

afterEach(() => {
  cleanup();
})

it('renders one element', () => {
  jest.spyOn(window.localStorage.__proto__, 'setItem');
  window.localStorage.__proto__.setItem = jest.fn();

  // assertions as usual:
  expect(localStorage.setItem).toHaveBeenCalled(1);

});

