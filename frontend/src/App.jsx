import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList.jsx';
import { fetchProducts } from './api.js';
import './App.css';

function getInitialTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const data = await fetchProducts();
                if (!ignore) {
                    setProducts(data);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            ignore = true;
        };
    }, []);

    function handleToggleStock(id) {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, inStock: !product.inStock } : product
            )
        );
    }

    function handleDeleteProduct(id) {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
        );
    }

    function handleToggleTheme() {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
    }

    const inStockCount = products.filter(
        (product) => product.inStock
    ).length;

    return (
        <div className="app">

            {/* Header */}
            <header className="app-header">
                <div className="brand">
                    <span className="brand-icon">✿</span>
                    <span>BeautyStudio</span>
                </div>

                <div className="app-header-nav">
                    <span className="app-count">
                        {products.length} products · {inStockCount} in stock
                    </span>

                    <button
                        className="theme-toggle"
                        onClick={handleToggleTheme}
                        aria-pressed={theme === "dark"}
                        aria-label="Toggle color theme"
                    >
                        {theme === "dark" ? "☀" : "☾"}
                    </button>
                </div>
            </header>

            <main className="container">

                {/* Page heading */}
                <section className="welcome-section">
                    <p className="welcome-label">YOUR PERSONAL BEAUTY SPACE</p>
                    <h1>My beauty collection</h1>
                    <p className="welcome-text">
                        Keep your favorite essentials organized in one place.
                    </p>
                </section>

                {/* Product collection */}
                <section className="collection-section">
                    <div className="collection-heading">
                        <h2>My products</h2>
                        <span className="collection-count">
                            {String(products.length).padStart(2, "0")} ITEMS
                        </span>
                    </div>

                    {loading && <p className="info">Se încarcă produsele cosmetice...</p>}

                    {error && (
                        <p className="error">
                            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
                        </p>
                    )}

                    {!loading && !error && (
                        <ProductList
                            products={products}
                            onToggleStock={handleToggleStock}
                            onDeleteProduct={handleDeleteProduct}
                        />
                    )}
                </section>

            </main>

            <footer className="app-footer">
                <p>BeautyStudio</p>
            </footer>

        </div>
    );
}