# Sortie Zines

<img src="branding/logo.svg" alt="Sortie Zines — Split-S folded-page logo" width="480">

Home of **Field Notes**, the offline game magazine. Sortie Zines is the collection's identity; Field Notes remains the publication title.

Offline game zines for a general audience: nine issues, 41 articles and 131 illustrations. Topics include mecha, roguelikes, stealth, arcade action, unusual simulations, character action, Musou and sports.

`issues/` contains complete schema-version-2 packs and a reproducible `catalog.json`. All article text, illustrations and source notes are local; the reader does not download anything.

## Use with Sortie

Keep this content repository separate from the [Sortie application repository](https://github.com/sortie-launcher/sortie). From the Sortie checkout, explicitly supply this repository's `issues/` directory:

```sh
tools/build.sh -PsortieMagazinesDir=/path/to/sortie-zines/issues
```

The app pins a catalog digest and verifies supplied content before staging it into generated APK assets. A normal app build without that argument contains no bundled issues; user-supplied on-card packs still work. No submodule or automatic network fetch is required.

For a device-only installation, copy an issue directory into a hidden staging directory under `sortie/magazines/`, then rename it to the issue ID after the complete copy arrives. Do not overwrite personal configuration or ROM files.

## Editorial updates

Keep issue/article IDs stable, increase the issue revision for corrections, and retain its original publication date. Use portable game references rather than personal library filenames. Follow the application repository's magazine format and publication instructions; validate and regenerate the catalog before committing content changes. Update the application's content pin deliberately when releasing a new bundle.

Each issue includes offline Sources and `sources.json` provenance. Game images and quoted material belong to their respective rights holders; no endorsement or ownership is implied. Third-party material is not covered by the application code's MIT license.

## Branding

The folded-page Split-S identifies **Sortie Zines**, with **Field Notes** retained as the magazine title.
[Brand assets](branding/) include a transparent `mark.svg`, an outlined `logo.svg` wordmark, a square
`icon.svg` / 512px `icon.png`, and a 1280×640 `social-preview.svg` / `social-preview.png`.
The SVGs are self-contained: Lato Heavy Italic / Regular and STIX Two Text Bold lettering is outlined, not dependent
on installed fonts. Colours: blue `#B6CBDC`, ink `#101418`, and light text `#E6E8EB`.

Regenerate PNGs with ImageMagick: `magick -background none branding/icon.svg branding/icon.png` and
`magick -background none branding/social-preview.svg branding/social-preview.png`.
Upload the social-preview PNG under GitHub **Settings → Social preview** to set this repository's link image.
That upload is not exposed through the public REST/GraphQL APIs or `gh`; repository avatars use the shared owner's image.

These identity assets live outside `issues/`: adopting the logo does not revise published covers, issue packs or their
catalog digest. Branding is distinct from the credited third-party game illustrations.
