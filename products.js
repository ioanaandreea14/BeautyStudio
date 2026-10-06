const products = [
    {
        id: 1,
        productName: "MAC Glow Play Blush",
        inStock: true,
        targetArea: "Face",
        category: "Makeup",
        user: "Ioana"
    },
    {
        id: 2,
        productName: "NYX Ultimate Shadow Palette",
        inStock: false,
        targetArea: "Eyes",
        category: "Makeup",
        user: "Ioana"
    },
    {
        id: 3,
        productName: "Kerastase Nutritive Mask",
        inStock: true,
        targetArea: "Hair",
        category: "Haircare",
        user: "Ioana"
    }
];

const TARGET = ["Face", "Eyes", "Body", "Hair"];

function listProductNames (list) {
    return list.map((p) => p.productName);
}

function countInStock (list) {
    return list.filter((p) => p.inStock).length;
}

function searchByName(list, text) {
    const searchText = text.toLowerCase();
    return list.filter((p) => p.productName.toLowerCase().includes(searchText));
}

function getNextId(list) {
    return list.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

function addProduct(list, productName, targetArea, category = "General", user = "Ioana") {
    const cleanName = productName.trim();

    if (!cleanName) {
        console.log("Eroare validare: Numele produsului nu poate fi gol!");
        return list;
    }

    const newProduct = {
        id: getNextId(list),
        productName: cleanName,
        inStock: true,
        targetArea: targetArea,
        category: category,
        user: user
    };

    return [...list, newProduct];
}

function toggleInStock(list, id) {
    return list.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p));
}

function deleteProduct(list, id) {
    return list.filter((p) => p.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri: ", listProductNames(products).join(", "));
console.log("În stoc(active): ", countInStock(products));
console.log("Căutare 'NYX': ", listProductNames(searchByName(products, "NYX")).join(", "));

console.log("--- Adăugare ---");
let updatedList = addProduct(products, "Maybelline Fit Me Concealer", "Face", "Makeup", "Ioana");
console.log("Lista nouă are: ", updatedList.length, "produse");
console.log("Originalul a rămas cu: ", products.length, "produse");

console.log("--- Modificare și stergere ---");
updatedList = toggleInStock(updatedList, 2);
console.log("După activare id 2, în stoc:", countInStock(updatedList));

updatedList =deleteProduct(updatedList, 3);
console.log("După ștergrea id 3, produse rămase: ", listProductNames(updatedList).join(", "));

console.log("--- Validare ---");
addProduct(updatedList, " ", "Face");
addProduct(updatedList, "Serum Vitamina C", "Nails");
