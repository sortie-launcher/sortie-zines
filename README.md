# Sortie Zines

<img src="branding/logo.svg" alt="Sortie Zines — Split-S folded-page logo" width="480">

**Home of Field Notes, the offline gaming magazine.** Each issue takes one idea, from mecha garages to roguelike deaths
to stealth routes, and digs into a handful of games that show it off: what you actually do, how the first session feels,
where it rubs, and what reviewers said at the time. Every article ends with its sources.

> [!IMPORTANT]
> **Field Notes is written with AI.** Articles are researched and drafted by AI models from the sources each issue
> cites, under human direction. The writers have not played the games, and facts or quotations can be wrong: check an
> article's Sources before relying on it. If AI-written content is a dealbreaker for you, better to know now.

## The issues

| No. | Issue | About |
|---|---|---|
| 001 | [Field Notes](https://sortie-launcher.github.io/sortie-zines/field-notes-001/) | Short sorties, deep systems |
| 002 | [The Garage Issue](https://sortie-launcher.github.io/sortie-zines/field-notes-002/) | Buildcraft, loadouts and tactical tradeoffs |
| 003 | [One More Descent](https://sortie-launcher.github.io/sortie-zines/field-notes-003/) | Four roguelike traditions, four prices for dying |
| 004 | [Unseen, Unfair, Unscripted](https://sortie-launcher.github.io/sortie-zines/field-notes-004/) | Stealth routes, manipulation and traps |
| 005 | [Straight to the Good Part](https://sortie-launcher.github.io/sortie-zines/field-notes-005/) | Instant action, deep systems |
| 006 | [Strange Little Worlds](https://sortie-launcher.github.io/sortie-zines/field-notes-006/) | Build a life or bend a system |
| 007 | [The Art of the Fight](https://sortie-launcher.github.io/sortie-zines/field-notes-007/) | A history of character action |
| 008 | [The Battle Is the Map](https://sortie-launcher.github.io/sortie-zines/field-notes-008/) | Musou beyond the kill count |
| 009 | [The Other Arena](https://sortie-launcher.github.io/sortie-zines/field-notes-009/) | Sports for the systems-minded |

## Read it

- **In your browser:** [sortie-launcher.github.io/sortie-zines](https://sortie-launcher.github.io/sortie-zines/).
- **In [Sortie](https://github.com/sortie-launcher/sortie):** **Home → Magazines**. Signed Sortie releases come with
  every issue here bundled, so they read fully offline and link to the featured games you have on the device.
- **On your own card:** copy an issue folder into `sortie/magazines/`. Copy it to a hidden folder (`.field-notes-010`)
  first and rename it once the copy is complete, so Sortie never sees half an issue.

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
