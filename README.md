# Git & GitHub Learning Hub Website

A responsive beginner-friendly website for learning Git, GitHub, GitHub Actions, and GitHub Pages.

## Files

- `index.html` — website content and layout
- `style.css` — responsive styling
- `script.js` — interactive command tabs, copy buttons, and mobile navigation

## Run locally

You can open `index.html` in a browser. For a local development server, use VS Code's Live Server extension or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open **Settings → Pages**.
4. Under the publishing source, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Wait for deployment and use the URL shown in the Pages settings.

A project website URL usually looks like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Notes

- This is a static site; it does not need a backend server.
- The Google Fonts import uses an external service. The page still works with fallback fonts if the service is unavailable.
- Update the example repository name, links, and content to suit your own project.
