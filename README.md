# Boyce Chow’s engineering portfolio

Static Astro site styled with Tailwind CSS. Use a supported even-numbered Node.js version starting at 22.23.4.

```sh
npm ci
npm run dev
```

Run `npm run check` for Astro and TypeScript diagnostics, `npm run build` to generate the static site in `dist/`, and `npm run preview` to serve that build locally.

## Add a project

1. Put the project’s original images in a folder under `images/`.
2. Copy a Markdown entry in `src/content/projects/` and rename it using the new URL slug, such as `motor-controller.md`.
3. Update the `title`, `summary`, `context`, and `order`. Lower `order` values appear first on the homepage.
4. Set the `cover` image, alt text, and caption. Add any other figures as `gallery` entries with the same fields. Image paths are relative to the Markdown file.
5. Write the overview and contribution in the Markdown body, then run `npm run check` and `npm run build`.

Astro adds the card to the homepage and generates the project page at `/projects/<slug>/`.
