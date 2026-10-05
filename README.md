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

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

## Checklist Table
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