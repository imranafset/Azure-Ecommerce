import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://api.ecommerce.local/products')  // Backend API endpoint
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  );
}

export default Products;