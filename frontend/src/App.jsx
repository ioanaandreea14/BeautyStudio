import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import './App.css';

// Array-ul inițial folosit ca stare de pornire
const INITIAL_PRODUCTS = [
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

// Determină tema inițială din setările sistemului de operare
function getInitialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  // 1. State-ul pentru lista de produse
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  // 2. State-ul pentru tema grafică
  const [theme, setTheme] = useState(getInitialTheme);

  // Funcție de comutare a stocului (Actualizare imutabilă cu prev.map)
  function handleToggleStock(id) {
    setProducts((prevProducts) =>
        prevProducts.map((product) =>
            product.id === id ? { ...product, inStock: !product.inStock } : product
        )
    );
  }

  // Funcție de ștergere a unui produs (Actualizare imutabilă cu prev.filter)
  function handleDeleteProduct(id) {
    setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
    );
  }

  // Comutarea temei (Light/Dark) și setarea atributului data-theme pe <html>
  function handleToggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  // Valoare derivată: se recalculează automat la fiecare randare
  const inStockCount = products.filter((product) => product.inStock).length;

  return (
      <>
        <header className="app-header">
          <button
              className="theme-toggle"
              onClick={handleToggleTheme}
              aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <h1>BeautyStudio</h1>
          <p>Manage and organize your personal cosmetic products.</p>
          <p className="app-count">
            {products.length} products, {inStockCount} in stock
          </p>
        </header>

        <main className="container">
          <section className="panel">
            <h2>My Products</h2>
            <ProductList
                products={products}
                onToggleStock={handleToggleStock}
                onDeleteProduct={handleDeleteProduct}
            />
          </section>
        </main>
      </>
  );
}