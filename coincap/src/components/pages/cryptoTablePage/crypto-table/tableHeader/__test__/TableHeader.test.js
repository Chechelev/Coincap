import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { TableHeader } from '../table-header';

afterEach(() => {
  cleanup();
});


it('renders element', () => {

  render(<TableHeader></TableHeader>);

  const tableHeader = screen.getByTestId("tableHeader");
  expect(tableHeader).toBeInTheDocument();
});


it('checks table header content', () => {

  render(<TableHeader></TableHeader>);

  const tableHeader = screen.getByTestId("tableHeader");
  expect(tableHeader).toHaveTextContent('RankNamePriceMarcet CapVWAP (24Hr)SupplyVolume (24Hr)Change (24Hr)');
});
