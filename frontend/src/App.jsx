import React, {useState} from 'react';
import ProductList from './components/ProductList.jsx';
import './App.css';

const INITIAL_PRODUCTS = [
    { id: 1, productName: "MAC Glow Play Blush", inStock: true, targetArea: "Face", category: "Makeup", user: "Ioana" },
    { id: 2, productName: "NYX Ultimate Shadow Palette", inStock: false, targetArea: "Eyes", category: "Makeup", user: "Ioana" },
    { id: 3, productName: "Kerastase Nutritive Mask", inStock: true, targetArea: "Hair", category: "Haircare", user: "Ioana" },
];

function getInitialTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);
    const [theme, setTheme] = useState(getInitialTheme);

    function handleToggleStock(id) {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? {...product, inStock: !product.inStock} : product
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

                    <ProductList
                        products={products}
                        onToggleStock={handleToggleStock}
                        onDeleteProduct={handleDeleteProduct}
                    />
                </section>

            </main>

            <footer className="app-footer">
                <p>BeautyStudio</p>
            </footer>

        </div>
    );
}