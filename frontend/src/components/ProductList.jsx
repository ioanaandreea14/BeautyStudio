import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, onToggleStock, onDeleteProduct }) {
    if (!products || products.length === 0) {
        return <p className="empty">No cosmetic products found in your studio.</p>;
    }

    return (
        <ul className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onToggleStock={onToggleStock}
                    onDeleteProduct={onDeleteProduct}
                />
            ))}
        </ul>
    );
}