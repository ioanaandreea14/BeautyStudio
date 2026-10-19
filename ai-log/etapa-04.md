# Stage 4: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/9ad3bada86b2baf4 (Component separation, passing data via props, empty list handling and key prop testing)

## Key requests

### 1. Component structure and separation
- Asked: How to split the raw JSON display from Stage 3 into reusable React components for the BeautyStudio project.
- Got: Code for `ProductCard.jsx` and `ProductList.jsx` in `src/components/`, passing product data via props.
- Changed or rejected: Kept all component and prop names strictly in English to match the project standard.

### 2. Edge case testing and verification
- Asked: What steps to take for Pasul 5 in the Stage 4 guide to test component behavior.
- Got: Instructions to temporarily remove the `key` prop, test an empty array `[]` for conditional rendering, and toggle `inStock` values.
- Changed or rejected: Tested all cases temporarily and reverted changes to keep the initial state intact.

## What I learned / what did not work
- How to break UI into dedicated React components (`ProductList` and `ProductCard`).
- How to pass data from parent to child components using `props`.
- How to render arrays using `.map()` and the importance of using a unique `key` attribute.
- How to display a message when the product list is empty.