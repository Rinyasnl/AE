// App.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './productList';
import ProductDetails from './productDetails';

test('renders product list and product details', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <ProductList />
      <ProductDetails />
    </MemoryRouter>
  );

  // Test product list
  const productListTitle = screen.getByText(/Product List/i);
  expect(productListTitle).toBeInTheDocument();

  // Test product list items
  const productLinks = screen.getAllByRole('link');
  const expectedProductLinksCount = 3; // Assuming there are three products
  const filterLinksCount = 3; // Assuming there are three filter links
  const totalLinksCount = expectedProductLinksCount + filterLinksCount;
  expect(productLinks).toHaveLength(totalLinksCount); // Assuming there are three products

  // Click on a product link to navigate to product details
  const productLink = productLinks[0];
  productLink.click();

  // Wait for product details to be rendered
  await waitFor(() => {
    const productDetailsTitle = screen.getByText(/Product Details/i);
    expect(productDetailsTitle).toBeInTheDocument();
  });
});
