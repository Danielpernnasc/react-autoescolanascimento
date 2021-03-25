import React from "react";

import { render, screen } from "test-utils";
import ProductDetail from './ProductDetail';
import { buildProduct } from 'Models/builders/products';

test('renders ProductDetail page', () => {
  render(<ProductDetail product={buildProduct()} />);
  expect (screen.getByText('Incredible Soft Bacon', { selector: "h1" })).toBeInTheDocument();
});
