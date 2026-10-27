import React from 'react';

const TARGET_AREA_LABELS = {
    Face: "Face",
    Eyes: "Eyes",
    Body: "Body",
    Hair: "Hair"
};

export default function ProductCard({ product, onToggleStock, onDeleteProduct }) {
    return (
        <li className={product.inStock ? "item-card" : "item-card done"}>
            <label className="item-main">
                <input
                    type="checkbox"
                    checked={product.inStock}
                    onChange={() => onToggleStock(product.id)}
                />
                <div className="product-info">
                    <h3>{product.productName}</h3>
                    <p className="status">
                        Category: {product.category} | Target Area:{" "}
                        <span className={`badge badge-${product.targetArea.toLowerCase()}`}>
              {TARGET_AREA_LABELS[product.targetArea] || product.targetArea}
            </span>
                    </p>
                </div>
            </label>

            <div className="item-actions">
                <button
                    className="btn-danger"
                    onClick={() => onDeleteProduct(product.id)}
                    aria-label={`Delete ${product.productName}`}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}