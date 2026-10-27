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

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
- `TaskList` receives the whole array and renders one card per item
- `TaskCard` receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.


## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data 
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API


## Stage 1 Checklist
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

## Stage 2 Checklist
| ID    | Requirement                              | Where (permalink)                                                                                                                                                                        | How to check         |
|-------|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| S2-R1 | JS file linked, logs on page load        | [index.html#L71](https://github.com/ioanaandreea14/BeautyStudio/blob/46dbb272f69cf571dbda13b77b620c42b9f5c34f/index.html#L71)                                                            | open page, F12       |
| S2-R2 | 3+ items with id, name, state, tag       | [products.js#L1-L26](https://github.com/ioanaandreea14/BeautyStudio/blob/46dbb272f69cf571dbda13b77b620c42b9f5c34f/products.js#L1-L26)                                                    | read                 |
| S2-R3 | list, count, search, add, toggle, delete | [products.js#L30-L73](https://github.com/ioanaandreea14/BeautyStudio/blob/46dbb272f69cf571dbda13b77b620c42b9f5c34f/products.js#L30-L73)                                                  | console output       |
| S2-R4 | add rejects empty name and invalid tag   | [products.js#L50-L58](https://github.com/ioanaandreea14/BeautyStudio/blob/e2f8aeae7d19340fd0e88c0a6d00bdc8c1738cc6/products.js#L50-L58)                                                  | last 2 console lines |
| S2-R5 | original array unchanged after add       | [products.js#L88](https://github.com/ioanaandreea14/BeautyStudio/blob/e2f8aeae7d19340fd0e88c0a6d00bdc8c1738cc6/products.js#L88)                                                          | console line         |
| S2-R6 | README Stage 2 section + AI log          | [README.md](https://github.com/ioanaandreea14/BeautyStudio/blob/main/README.md), [ai-log/etapa-02.md](https://github.com/ioanaandreea14/BeautyStudio/blob/main/ai%20-%20log/etapa-02.md) | read                 |
| S2-R7 | commit "Stage 2" pushed                  | [Commit link](https://github.com/ioanaandreea14/BeautyStudio/commit/46dbb272f69cf571dbda13b77b620c42b9f5c34f)                                                                            | commit history       |

## Stage 3 Checklist
| ID    | Requirement                             | Where (permalink)                                                                                                                                                                                                                                          | How to check             |
|-------|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| S3-R1 | npm run dev starts without errors       | [frontend/package.json](https://github.com/ioanaandreea14/BeautyStudio/blob/main/frontend/package.json)                                                                                                                                                    | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx#L25-L39](https://github.com/ioanaandreea14/BeautyStudio/blob/febe935887d3f3e16d7763a53bf0eaae66e5d7ae/frontend/src/App.jsx#L28-L50)                                                                                                  | edit data, save          |
| S3-R3 | data from README, not from the example  | [frontend/src/App.jsx#L1-L23](https://github.com/ioanaandreea14/BeautyStudio/blob/febe935887d3f3e16d7763a53bf0eaae66e5d7ae/frontend/src/App.jsx#L1-L26)                                                                                                    | compare with README      |
| S3-R4 | stage 1 styles reused                   | [frontend/src/App.css](https://github.com/ioanaandreea14/BeautyStudio/blob/febe935887d3f3e16d7763a53bf0eaae66e5d7ae/frontend/src/App.css)                                                                                                                  | look at the page         |
| S3-R5 | node_modules ignored, build passes      | [frontend/.gitignore](https://github.com/ioanaandreea14/BeautyStudio/blob/febe935887d3f3e16d7763a53bf0eaae66e5d7ae/frontend/.gitignore)                                                                                                                    | npm run build            |
| S3-R6 | README Stage 3 section + AI log         | [README.md](https://github.com/ioanaandreea14/BeautyStudio/blob/febe935887d3f3e16d7763a53bf0eaae66e5d7ae/README.md), [ai-log/etapa-03.md](https://github.com/ioanaandreea14/BeautyStudio/blob/febe935887d3f3e16d7763a53bf0eaae66e5d7ae/ai-log/etapa-03.md) | read                     |
| S3-R7 | commit "Stage 3" pushed                 | [Commit link](https://github.com/ioanaandreea14/BeautyStudio/commit/febe935887d3f3e16d7763a53bf0eaae66e5d7ae)                                                                                                                                              | commit history           |

### Stage 4 Checklist

| ID    | Requirement                         | Where (permalink)                                                                                                                                                                                                                                          | How to check      |
|-------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| S4-R1 | 2+ components in `src/components/`  | [frontend/src/components/](https://github.com/ioanaandreea14/BeautyStudio/tree/main/frontend/src/components)                                                                                                                                               | open folder       |
| S4-R2 | card receives data through props    | [ProductCard.jsx#L10](https://github.com/ioanaandreea14/BeautyStudio/blob/0d5853dc9fe8a4b59a01805a06cf3178df898343/frontend/src/components/ProductCard.jsx#L10)                                                                                            | read              |
| S4-R3 | map + key={id}, no console warnings | [ProductList.jsx#L10-L14](https://github.com/ioanaandreea14/BeautyStudio/blob/0d5853dc9fe8a4b59a01805a06cf3178df898343/frontend/src/components/ProductList.jsx#L10-L14)                                                                                    | F12, Console      |
| S4-R4 | message for empty list              | [ProductList.jsx#L5-L7](https://github.com/ioanaandreea14/BeautyStudio/blob/0d5853dc9fe8a4b59a01805a06cf3178df898343/frontend/src/components/ProductList.jsx#L5-L7)                                                                                        | set array to `[]` |
| S4-R5 | state changes the card look         | [ProductCard.jsx#L12](https://github.com/ioanaandreea14/BeautyStudio/blob/0d5853dc9fe8a4b59a01805a06cf3178df898343/frontend/src/components/ProductCard.jsx#L12)                                                                                            | toggle `inStock`  |
| S4-R6 | README Stage 4 section + AI log     | [README.md](https://github.com/ioanaandreea14/BeautyStudio/blob/0d5853dc9fe8a4b59a01805a06cf3178df898343/README.md), [ai-log/etapa-04.md](https://github.com/ioanaandreea14/BeautyStudio/blob/0d5853dc9fe8a4b59a01805a06cf3178df898343/ai-log/etapa-04.md) | read              |
| S4-R7 | commit "Stage 4" pushed             | [Commit Link](https://github.com/ioanaandreea14/BeautyStudio/commit/0d5853dc9fe8a4b59a01805a06cf3178df898343)                                                                                                                                              | commit history    |

