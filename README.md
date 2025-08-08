# Grounds by Barns — QR Character Microsite Read Guide for Team 

A single static site that changes content based on the QR link parameters.

## How it works

- Each sleeve QR goes to the **same** URL with a character id:

  - ...https://nouraAlGahtani.github.io/Grounds.github.io/?char=1

https://nouraAlGahtani.github.io/Grounds.github.io/?char=2

https://nouraAlGahtani.github.io/Grounds.github.io/?char=3

https://nouraAlGahtani.github.io/Grounds.github.io/?char=4

https://nouraAlGahtani.github.io/Grounds.github.io/?char=5
- Optional language param: `&lang=ar` (defaults to English).

The page reads `char` and `lang` then swaps colors, avatar, and text from a config in `script.js`.

## Files
- `index.html` — the page template
- `styles.css` — styles (no frameworks)
- `script.js` — data + logic for routing and i18n
- `assets/characters/*.svg` — placeholder avatars (replace with your art)

## Deploy
You can host on any static host (Netlify, Vercel, GitHub Pages, S3, etc.). Just upload the folder.
