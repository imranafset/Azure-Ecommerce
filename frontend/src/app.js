import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://backend-service:8000/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ecommerce Store</h1>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;
