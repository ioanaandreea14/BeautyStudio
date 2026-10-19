import React from 'react';

const TARGET_AREA_LABELS = {
    Face: "Face",
    Eyes: "Eyes",
    Body: "Body",
    Hair: "Hair"
};

export default function ProductCard({ product }) {
    return (
        <li className={product.inStock ? "product-card in-stock" : "product-card out-of-stock"}>
            <div className="product-info">
                <h3>{product.productName}</h3>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Target Area:</strong> {TARGET_AREA_LABELS[product.targetArea] || product.targetArea}</p>
                <p className="user-tag">Added by: {product.user}</p>
            </div>
            <span className={product.inStock ? "status status-in" : "status status-out"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>
        </li>
    );
}