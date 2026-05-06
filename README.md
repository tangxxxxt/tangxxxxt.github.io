# My Homepage (Template)

This project is a ready-to-edit personal homepage for GitHub Pages.

## Files
- `index.html`: page structure.
- `style.css`: visual style.
- `script.js`: all personal data and rendering logic.
- `assets/`: put your images here.

## Where to fill your own information
Edit `script.js` in the `PROFILE` object. Search for `TODO_` fields.

Examples:
- `name: "TODO_YOUR_NAME"` -> `name: "Zhang San"`
- `email: "TODO_YOUR_EMAIL"` -> `email: "zhangsan@xxx.edu"`
- `interests: ["TODO_INTEREST_1"]` -> `interests: ["LLM Agents"]`

## Avatar
Put your photo at:
- `assets/avatar.jpg`

## Run locally
Open `index.html` directly, or run:

```powershell
cd "D:\Codex\Personal Main\my-homepage"
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to GitHub Pages
1. Create a GitHub repo named `<your-github-username>.github.io`.
2. Upload all files in this folder.
3. In repo settings, enable GitHub Pages from the main branch root.
