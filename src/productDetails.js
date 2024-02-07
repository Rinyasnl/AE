// ProductDetails.js
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter');

  // Fetch product details based on id
  // Here, you can fetch the product details from an API using the id
  
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Filter: {filter}</p>
      {/* Additional filtering options */}
      <p>Filter by:
        <Link to={`?filter=price`}>Price</Link>{' '}
        <Link to={`?filter=category`}>Category</Link>{' '}
        <Link to={`?filter=brand`}>Brand</Link>
      </p>
    </div>
  );
}

export default ProductDetails;
