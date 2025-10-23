# Portfolio site

This is a lightweight, responsive, animated static portfolio site scaffold. It is meant to be opened locally or deployed to any static host (GitHub Pages, Netlify, Vercel).

What is included
- `index.html` — single-page site with sections: hero, about, experience, projects, skills, contact.
- `styles.css` — modern dark theme, responsive layout, reveal animations.
- `script.js` — small helpers: scroll reveal, mobile nav, resume download wiring, demo contact handler.
- `assets/profile.svg` — placeholder profile illustration.

How to use
1. Copy your `My_CV.pdf` file into the parent folder of `portfolio-site` (next to the `portfolio-site` folder), or update `script.js` resumePath to point to your PDF location. The default path used is `../My_CV.pdf`.
2. Open `portfolio-site/index.html` in your browser to preview.
3. Edit `index.html` to replace placeholders (your name, email, locations, experience, project links).
4. For production deploys, put `My_CV.pdf` in the same directory as your published site root and update `resumePath` if necessary.

Customizing
- Replace the text in `index.html` with your real content.
- Replace `assets/profile.svg` with a real photo (keep the filename or edit the image src).
- If you want to auto-fill the site from your attached CV (PDF), I can parse it and populate sections — tell me whether you want that.

Deploy suggestions
- GitHub Pages: push this folder to a repo and enable Pages from the `gh-pages` branch or `main` branch root.
- Netlify/Vercel: drag & drop or connect the repo, set the build to static.

Next steps I can help with
- Parse your attached `My_CV.pdf` and auto-fill the About / Experience / Projects sections.
- Add a contact form backend (email sending) using Netlify Functions, Formspree, or simple server.
- Convert to a React/Next.js site with CMS integration.
