# Stage 2: AI log

## Tools
- Gemini

## Conversations
- https://gemini.google.com/app/7f8cb6f3a10a418e (Data logic, array methods, immutability, console testing)

## Key requests
### 1. Data logic and core functions
- **Asked:** How to write the JS functions for managing products without touching the DOM.
- **Got:** Code for array operations (`map`, `filter`, `reduce`, spread operator) for listing, searching, adding, toggling, and deleting products.
- **Changed or rejected:** Renamed variables to English and adapted target areas to "Face", "Eyes", "Body", and "Hair".

### 2. Concept explanations
- **Asked:** How immutability works and why we need pure functions for Stage 2.
- **Got:** Clear explanation on why we create new arrays with `...` instead of mutating with `push`, and why `reduce` is used for IDs.
- **Changed or rejected:** Applied the logic to the functions.

### 3. Debugging errors
- **Asked:** How to fix `Cannot access 'list' before initialization` and `getNextId is not defined`.
- **Got:** Fixed variable shadowing inside `addProduct` and added the missing `getNextId` function.
- **Changed or rejected:** Kept the fixes and added validation for the `TARGET` array.

## What I learned / what did not work
- How to use `map`, `filter`, `reduce`, and `...` to keep data immutable.
- Why `reduce` is better than `.length + 1` for generating unique IDs.
- How to validate inputs (`trim()`, `includes()`) before updating data.
- How to keep data logic completely separated from the DOM.