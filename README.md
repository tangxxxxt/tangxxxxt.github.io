# Xianteng Tang Personal Homepage

This is a static personal homepage adapted from the downloaded template.

## Preview locally

Open `index.html` directly in a browser.

## Edit content

Most personal content is in `index.html`. Edit this file when you want to change your name, title, About text, education, projects, publications, software copyrights, activities, honors, or contact links.

Suggested replacements:

- `images/resume-image-1-1.png` and `images/github-avatar.png` -> the two photos used by the click-to-switch avatar.
- `images/background/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` -> your own homepage background photos.
- `images/pub-*.svg` -> publication thumbnails.
- `images/materials/` -> software interface previews and award/certificate thumbnails.
- `work/` -> PDFs such as CV, papers, slides, or portfolio files.

Style overrides are in `css/site-overrides.css`. The larger inherited template stylesheet is `main.css`; avoid editing it unless you need to change the template itself.

## Publish

Upload the folder contents to a GitHub Pages repository. The site does not need a build step.

For the username homepage URL, create a GitHub repository named:

```text
tangxxxxt.github.io
```

Then publish these files to the repository root. The default URL will be:

```text
https://tangxxxxt.github.io/
```

No custom domain is required for the GitHub-provided URL.

## Enable The Visitor Globe

The `Visitor Map` section is already in `index.html`, but the real ClustrMaps globe needs your own widget ID.

1. Publish the site at `https://tangxxxxt.github.io/`.
2. Register that URL on ClustrMaps and choose the 3D globe widget.
3. Copy the generated script ID.
4. In `index.html`, find `YOUR_CLUSTRMAPS_ID` and replace it with your ID.
5. Uncomment the ClustrMaps `<script>` line in the same section.
