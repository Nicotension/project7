# Copilot instructions for this repository

**Purpose**: Help AI coding agents be immediately productive editing and maintaining this static website project (HTML/CSS/JS + images). Focus on concrete, discoverable patterns and commands specific to this repo.

**Quick Project Summary**
- **Type**: Static site made of many standalone HTML files (no framework). Key files: `index.html`, `index.js`, `style.css`, `trying-style.scss` and many HTML pages such as `Wohnbau+bildung.html` and `projekte.html`.
- **Assets**: Images live under `image/` and subfolders (examples: `image/höllerschmid_pics/`, `wohnbau+bild.pic/`, `obertrum_pics_G.I/`). Filenames and directories include spaces, plus signs and non-ASCII characters (e.g. `höllerschmid_pics`).

**What to know before editing**
- Preserve file names and paths: many HTML files reference assets with exact names (including spaces, diacritics, and `+` characters). Avoid renaming images or folders unless you update all referencing HTML files and verify links.
- Encoding: Files use UTF-8 with non-ASCII characters in filenames and content. Keep UTF-8 encoding when reading/writing files to avoid corrupting characters.
- No build system: There is no `package.json` or task runner detected. Changes are served statically — prefer minimal, targeted edits.

**Local testing / preview commands (PowerShell)**
- Quick static server (Python 3):
```
python -m http.server 8000
```
Open `http://localhost:8000/` in a browser to preview.
- If you prefer VS Code Live Server extension, use that to preview single pages.
- SCSS is present but not compiled automatically. If you edit `trying-style.scss`, compile manually with Dart Sass:
```
sass --watch trying-style.scss:style.css
```

**Project-specific patterns & examples**
- Single-file pages: Most pages are independent HTML files (e.g. `Wohnbau+bildung.html`). Edits are usually made directly to those files rather than a central template.
- Styles: Global CSS is `style.css`. `trying-style.scss` appears experimental — check whether pages link to `style.css` before changing references.
- JS: `index.js` is the only top-level JS file listed; search for inline scripts in HTML before adding global behavior.
- Images: Example references in HTML use relative paths like `image/03 Neubaugürtel/...`. When programmatically editing HTML, account for spaces and special characters (they may appear unencoded in the source). Use the literal filenames when updating references; browsers accept them, but when constructing URLs programmatically consider percent-encoding.

**What agents should do for common tasks**
- Small visual/content change: Edit the specific HTML file (example: to change a heading in `Wohnbau+bildung.html`), run local server, open page, verify visuals.
- Add/replace an image: Add the image file into an existing `image/` subfolder, then update only the HTML files that reference it. Do not mass-rename or move folders.
- Update styles: Edit `style.css` for small tweaks. If you change `trying-style.scss` also compile to `style.css` and verify no pages expect an alternate filename.

**Pull request guidance for agents**
- Keep changes small and focused (one page or one asset group per PR).
- Include: description of intent, list of edited files, preview screenshots or a local-testing checklist, and note about encoding or filename changes if any.

**Files and places to inspect when unsure**
- `index.html` and `index.js` — site entry and scripts.
- `style.css` and `trying-style.scss` — styling and experimental SCSS.
- `projekte.html`, `Wohnbau+bildung.html`, `Neubaugürtel.html` — representative page structure and asset usage.
- `image/` directory — samples of asset naming conventions and nested folders.

**Do not assume**
- There is no automated build/test pipeline — do not add changes that require CI without adding instructions and a simple script for maintainers.
- File renames are safe: many static links depend on exact names.

If anything in this file is unclear or you want the agent to follow a stricter commit/PR format, tell me which conventions to add and I will iterate.
