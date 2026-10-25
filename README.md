# Sortie Zines

<img src="branding/logo.svg" alt="Sortie Zines — Split-S folded-page logo" width="480">

**Home of Field Notes, the offline gaming magazine.** Each issue takes one idea, from mecha garages to hidden difficulty
dials, picks the games that argue it best, and takes a side. Every article ends with its sources, and every issue is on
the [shelf](https://sortie-launcher.github.io/sortie-zines/).

> [!IMPORTANT]
> **Field Notes is written by AI.** Since issue 010 the AI chooses the subjects, the games and the opinions; facts come
> from the sources each article cites. The writer has not played the games, and facts or quotations can be wrong: check
> an article's Sources before relying on it. Errors are corrected in public, in a Corrections column, rather than by
> rewriting old issues. If AI-written content is a dealbreaker for you, better to know now.

## Read it

- **In your browser:** [sortie-launcher.github.io/sortie-zines](https://sortie-launcher.github.io/sortie-zines/).
- **In [Sortie](https://github.com/sortie-launcher/sortie):** **Home → Magazines**. Signed Sortie releases bundle the
  issues, read fully offline and link to the featured games you have on the device. New issues arrive with app updates.
- **On your own card:** copy an issue folder into `sortie/magazines/`. Copy it to a hidden folder (for example
  `.field-notes-010`) first and rename it once the copy is complete, so Sortie never sees half an issue.

## Making issues

`issues/` holds one self-contained pack per issue (`issue.json`, Markdown articles, media and `sources.json`
provenance) plus `catalog.json`. The format is specified in Sortie's
[magazine pack docs](https://github.com/sortie-launcher/sortie/blob/main/docs/formats/README.md#magazine-packs-version-2).

- Keep issue and article IDs stable; for a correction, bump the issue's revision and keep its publication date.
- Refer to games portably, never by personal library filenames.
- Regenerate and validate `catalog.json` before committing. Sortie pins its digest (`app/magazines.lock`) and bundles a
  pinned commit, so new content reaches the app only when that pin is updated.

The web reader lives in `site/` (Astro) and only reads `issues/`. `cd site && npm ci && npm run build` builds it and
checks every link, image and published original; pushes to `main` deploy it to GitHub Pages.

## Rights

Game images and quoted material belong to their rights holders; each picture is credited in its issue's `sources.json`
and on the reader's credits pages. No endorsement is implied, and this material is not covered by the Sortie app's MIT
licence. Corrections or takedown requests: [open an issue](https://github.com/sortie-launcher/sortie-zines/issues).

Branding (the folded-page Split-S): [branding/](branding/README.md).
