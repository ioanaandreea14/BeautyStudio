import React from 'react';
import ProductList from './components/ProductList.jsx';
import './App.css';

const products = [
  {
    id: 1,
    productName: "MAC Glow Play Blush",
    inStock: true,
    targetArea: "Face",
    category: "Makeup",
    user: "Ioana",
  },
  {
    id: 2,
    productName: "NYX Ultimate Shadow Palette",
    inStock: false,
    targetArea: "Eyes",
    category: "Makeup",
    user: "Ioana",
  },
  {
    id: 3,
    productName: "Kerastase Nutritive Mask",
    inStock: true,
    targetArea: "Hair",
    category: "Haircare",
    user: "Ioana",
  },
];

export default function App() {
  const inStockCount = products.filter((product) => product.inStock).length;

  return (
      <>
        <header className="app-header">
          <h1>BeautyStudio</h1>
          <p>Manage and organize your personal cosmetic products.</p>
          <p className="app-count">
            {products.length} products,  {inStockCount} in stock
          </p>
        </header>

        <main className="container">
          <section className="panel">
            <h2>My Products</h2>
            <ProductList products={products} />
          </section>
        </main>
      </>
  );
}