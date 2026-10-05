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