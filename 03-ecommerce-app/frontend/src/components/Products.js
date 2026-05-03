import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This calls http://api.ecommerce.local/products
        axios.get(`${API_BASE_URL}/products`)
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="container mt-5 text-center">
            <div className="spinner-border text-primary" role="status"></div>
            <p>Loading catalog...</p>
        </div>
    );

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Our Catalog</h2>
            <div className="row">
                {products.length === 0 ? (
                    <div className="col-12 text-center">
                        <p className="alert alert-info">No products found in the database. Please seed the DB!</p>
                    </div>
                ) : (
                    products.map(product => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-muted">{product.description}</p>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <span className="h4 mb-0 text-primary">${product.price}</span>
                                        <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Products;