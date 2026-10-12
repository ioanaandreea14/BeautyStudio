# BeautyStudio
A web application to manage and organize your personal cosmetic products and skincare routine.
Designed for personal care enthusiasts to easily track stock levels and product usage.

## Data model
| Field       | Type         | Notes                                 |
|-------------|--------------|---------------------------------------|
| productName | text         | required, max 100 chars               |
| inStock     | boolean      | toggled from the list, default true   |
| targetArea  | fixed values | Face, Eyes, Body, Hair                |
| category    | relation     | Makeup, Skincare, Haircare, Body Care |
| user        | relation     | the owner of the item (from week 11)  |

Sample data used across all stages:
1. MAC Glow Play Blush, active, Face
2. NYX Ultimate Shadow Palette, done, Eyes
3. Kerastase Nutritive Mask, active, Hair

## How to run
Open `index.html` in a browser. No build step, no server.

## AI usage
| Tool   | Used for                                                   |
|--------|------------------------------------------------------------|
| Gemini | Initial HTML/CSS structure and layout guidance for Stage 1 |

Details per stage: see the `ai-log/` folder.

## Stage 2: data logic
Plain JavaScript, no DOM. `products.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Checklist Table
## Stage 1
| ID    | Requirement                                          | Where (permalink)                                                                                                                                                                                                                                                            | How to check     |
|-------|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| S1-R1 | README: description, fields, sample data, how to run | [README.md#L1-L20](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/README.md?plain=1#L1-L20)                                                                                                                                    | read             |
| S1-R2 | AI usage section                                     | [README.md#L22-L27](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/README.md?plain=1#L22-L27)                                                                                                                                  | read             |
| S1-R3 | AI log for stage 1                                   | [ai - log/etapa-01.md#L1-L24](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/ai%20-%20log/etapa-01.md?plain=1#L1-L24)                                                                                                          | read             |
| S1-R4 | header, form (text + select), 3 cards with own data  | [index.html#L10-L66](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/index.html#L10-L66)                                                                                                                                        | open the page    |
| S1-R5 | finished card looks different                        | [style.css#L151-L154](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/style.css#L151-L154)                                                                                                                                      | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px                  | [style.css#L60-L68](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/style.css#L60-L68), [style.css#L187-L191](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/style.css#L187-L191) | resize < 700px   |
| S1-R7 | visible focus, readable dark theme                   | [style.css#L182-L185](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/style.css#L182-L185), [style.css#L21-L30](https://github.com/ioanaandreea14/BeautyStudio/blob/465f66e0c2333f65ecb3a061c788cb7811a1226f/style.css#L21-L30) | Tab; dark mode   |
| S1-R8 | commit "Stage 1" pushed                              | [Commit link](https://github.com/ioanaandreea14/BeautyStudio/commit/465f66e0c2333f65ecb3a061c788cb7811a1226f)                                                                                                                                                                | check commits    |

## Stage 2
| ID    | Requirement                              | Where (permalink)                                                                                                                                                                        | How to check         |
|-------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| S2-R1 | JS file linked, logs on page load        | [index.html#L71](https://github.com/ioanaandreea14/BeautyStudio/blob/46dbb272f69cf571dbda13b77b620c42b9f5c34f/index.html#L71)                                                            | open page, F12       |
| S2-R2 | 3+ items with id, name, state, tag       | [products.js#L1-L26](https://github.com/ioanaandreea14/BeautyStudio/blob/46dbb272f69cf571dbda13b77b620c42b9f5c34f/products.js#L1-L26)                                                    | read                 |
| S2-R3 | list, count, search, add, toggle, delete | [products.js#L30-L73](https://github.com/ioanaandreea14/BeautyStudio/blob/46dbb272f69cf571dbda13b77b620c42b9f5c34f/products.js#L30-L73)                                                  | console output       |
| S2-R4 | add rejects empty name and invalid tag   | [products.js#L50-L58](https://github.com/ioanaandreea14/BeautyStudio/blob/e2f8aeae7d19340fd0e88c0a6d00bdc8c1738cc6/products.js#L50-L58)                                                  | last 2 console lines |
| S2-R5 | original array unchanged after add       | [products.js#L88](https://github.com/ioanaandreea14/BeautyStudio/blob/e2f8aeae7d19340fd0e88c0a6d00bdc8c1738cc6/products.js#L88)                                                          | console line         |
| S2-R6 | README Stage 2 section + AI log          | [README.md](https://github.com/ioanaandreea14/BeautyStudio/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/ioanaandreea14/BeautyStudio/blob/main/ai%20-%20log/etapa-02.md) | read                 |
| S2-R7 | commit "Stage 2" pushed                  | [Commit link](https://github.com/ioanaandreea14/BeautyStudio/commit/46dbb272f69cf571dbda13b77b620c42b9f5c34f)                                                                            | commit history       |