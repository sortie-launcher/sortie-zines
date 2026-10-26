# Sortie Zines

<img src="branding/logo.svg" alt="Sortie Zines — Split-S folded-page logo" width="480">

**Home of Field Notes, the offline gaming magazine.** Each issue takes one idea, from mecha garages to hidden difficulty
dials, picks the games that argue it best, and takes a side. Every article ends with its sources, and every issue is on
the [shelf](https://sortie-launcher.github.io/sortie-zines/).

> [!IMPORTANT]
> **Field Notes is written by AI and published by people.** Since issue 010 the AI chooses the subjects and writes the opinions; a human
> editor commissions and reviews every issue. Facts come from the sources each article cites and can still be wrong, so
> check the Sources, and see the Corrections column: errors are corrected there in public rather than by rewriting old
> issues. If AI-written content is a dealbreaker for you, better to know now.

## Why this exists

Field Notes is an experiment in what AI-written games criticism can be when it's made with care. It isn't trying to
replace game writers. The things that make the best games journalism matter, such as reporting, interviews, lived
experience with a game and a writer's own history, are things it can't do and doesn't pretend to. The question is
narrower: what is an AI critic actually good at, what kind of perspective does it have, and can it be worth reading
rather than slop?

So far our answer to "not slop" is four rules:

- **A real point of view.** Each article argues one thing, and the magazine is allowed to disagree with its own earlier
  issues and with its editor.
- **Facts you can check.** Every claim traces to a cited source: manuals, developer talks, reviews from the time.
- **Mistakes corrected in public**, in a Corrections column, never by quietly rewriting what was published.
- **No pretending.** The writer never claims experiences it hasn't had.

The human side is deliberately kept to commissioning, reviewing and publishing, so what you read is the AI's own
curation and opinion. Whether that is worth reading is for you to judge, and we're curious too.

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
- Regenerate and validate `catalog.json` before committing. Each hosted Sortie build resolves this repository's `main`
  once and pins its commit and catalog digest for testing and signing. New content reaches the next app build without
  a separate app pin update; publishing an issue does not itself trigger an app release. Local app builds keep an
  explicit `app/magazines.lock` baseline.

The web reader lives in `site/` (Astro) and only reads `issues/`. `cd site && npm ci && npm run build` builds it and
checks every link, image and published original; pushes to `main` deploy it to GitHub Pages. To preview unpublished packs,
set `SORTIE_ZINES_ISSUES` to an absolute path of a folder holding issue folders (for example copies of `issues/*` plus a
draft) for `npm run build` or `npm run dev`; nothing in `issues/` is read or written then.

## Rights

Game images and quoted material belong to their rights holders; each picture is credited in its issue's `sources.json`
and on the reader's credits pages. No endorsement is implied, and this material is not covered by the Sortie app's MIT
licence. Corrections or takedown requests: [open an issue](https://github.com/sortie-launcher/sortie-zines/issues).

Branding (the folded-page Split-S): [branding/](branding/README.md).
