import React from "react";
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/react';
import { Footer } from '../footer';

afterEach(() => {
  cleanup();
})


it('renders element', () => {
  render(<Footer></Footer>);

  const footerElement = screen.getByTestId("footerTest");
  expect(footerElement).toBeInTheDocument();
});


it('checks footer content', () => {
  render(<Footer></Footer>);

  const creatorBlockName = screen.getByTestId('creatorBlockName');
  const creatorBlockGitHub = screen.getByTestId('creatorBlockGitHub');

  expect(creatorBlockName).toBeInTheDocument();
  expect(creatorBlockName).toHaveTextContent('Pavel Chechelev');

  expect(creatorBlockGitHub).toBeInTheDocument();
  expect(creatorBlockGitHub).toHaveTextContent('GitHub');
});
