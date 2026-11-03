import React from 'react';

const TARGET_AREA_LABELS = {
    Face: "Face",
    Eyes: "Eyes",
    Body: "Body",
    Hair: "Hair"
};

export default function ProductCard({product, onToggleStock, onDeleteProduct}) {

    return (
        <li className={`product-card ${!product.inStock ? "out-of-stock" : ""}`}>

            {/*CHECKBOX & PRODUCT INFO*/}
            <label className="product-checkbox">
                <input
                    type="checkbox"
                    checked={product.inStock}
                    onChange={() => onToggleStock(product.id)}
                    aria-label={`Toggle stock for ${product.productName}`}
                />

                <div className="product-info">
                    <h3>{product.productName}</h3>

                    <div className="product-details">

                        <span className="product-category">{product.category}</span>
                        <span className="detail-separator">·</span>
                        <span className={`badge badge-${product.targetArea.toLowerCase()}`}>
                            {TARGET_AREA_LABELS[product.targetArea] || product.targetArea}
                        </span>
                    </div>

                </div>
            </label>

            {/*ACTIONS*/}
            <div className="product-actions">
                <span className={`stock-status ${product.inStock ? "available" : "unavailable"}`}>
                    {product.inStock ? "In stock" : "Out of stock"}
                </span>

                <button
                    className="delete-button"
                    onClick={() => onDeleteProduct(product.id)}
                    aria-label={`Delete ${product.productName}`}
                    title="Delete product"
                >
                    <span>×</span>
                </button>
            </div>

        </li>
    );
}