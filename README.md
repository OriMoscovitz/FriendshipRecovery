# Friendship Recovery — cyber-kawaii edition

A tiny Flask apology deck: cute, nerdy, interactive, and intentionally *not* a "please be my best friend again" website.

## Visual direction

The redesign takes inspiration from:
- pastel pink / lavender / blue palettes
- cute fruit, flowers, cats, moon/night motifs
- dark anime-ish contrast
- soft UI / neomorphism
- collage / sticker energy
- modern product-design references

Nothing from the Pinterest screenshots is copied directly. All illustrations in `static/images/` are original SVGs built for this project.

## Interactions

- Arrow keys navigate slides
- `T` or the `>_` button opens a fake terminal
- subtle cursor sparkles
- hover reactions on the "spec" rows
- tiny 3D tilt on desktop
- final `deploy peace ✦` button launches confetti and returns to the beginning
- respects `prefers-reduced-motion`

## Run locally

```bash
python -m venv venv
```

Windows:
```bash
venv\Scripts\activate
```

macOS / Linux:
```bash
source venv/bin/activate
```

Then:
```bash
pip install -r requirements.txt
python app.py
```

Open `http://127.0.0.1:5000`.

## GitHub + deploy

GitHub is perfect for hosting the repository, but GitHub Pages does not run Flask/Python server code directly.

Easy deployment options:
- Render
- Railway
- PythonAnywhere

The included `Procfile` uses Gunicorn.
