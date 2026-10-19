import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ products }) {
    if (!products || products.length === 0) {
        return <p className="empty">No products found.</p>;
    }

    return (
        <ul className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    );
}