import React from "react";

import { render, screen } from "test-utils";
import ProductRoute from './index';
import { useProduct } from "Hooks/products";
import { buildProduct } from "Models/builders/products";

jest.mock("Hooks/products");

test('render with a product', () => {
  useProduct.mockReturnValue(buildProduct());
  
  render(<ProductRoute />);

  expect(screen.getByText('Incredible Soft Bacon', { selector: "h1" })).toBeInTheDocument()
});

test('not found product', () => {
    useProduct.mockReturnValue(null);
    
    render(<ProductRoute />);
  
    expect(screen.getByText('Serviço não encontrado')).toBeInTheDocument()
  });
