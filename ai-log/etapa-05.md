# Stage 5: AI log

## Tools
- Gemini

## Conversations
-  https://gemini.google.com/app/1b54303a0084f905 (Local state management with useState, controlled checkboxes, immutable updates, derived state, and dark mode toggle via HTML data-theme attribute)

## Key requests

### 1. Interactive list with state and event handlers
- Asked: How to make the static product list interactive so items can be checked as in-stock and deleted directly from the UI.
- Got: Updated `App.jsx`, `ProductList.jsx`, and `ProductCard.jsx` to store products in React `useState`, passing click handlers (`onToggleStock`, `onDeleteProduct`) down to each card.
- Changed or rejected: Kept array operations strictly immutable using `.map()` for updating stock status and `.filter()` for deleting products.

### 2. Light and Dark mode switch
- Asked: How to add a theme toggle button in the header that switches between light and dark themes using React state and CSS variables.
- Got: A `theme` state in `App.jsx` that updates the `data-theme` attribute on the `<html>` element and dynamically changes the button text (`Dark Mode` / `Light Mode`).
- Changed or rejected: Adapted CSS to use existing project color variables instead of hardcoded colors.

## What I learned / what did not work
- How to manage dynamic data in React using `useState` and update lists safely with `.map()` and `.filter()`.
- Why the product counter is calculated directly on render as a derived value instead of using a separate state.
- How controlled inputs work using `checked` and `onChange` together to update the UI correctly.
- Why using `onClick={() => onDelete(id)}` prevents the function from running immediately and emptying the list.