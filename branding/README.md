# Sortie Zines branding

The folded-page Split-S identifies **Sortie Zines**; **Field Notes** remains the magazine's title.

| File | Use |
| --- | --- |
| `mark.svg` | transparent mark |
| `logo.svg` | outlined wordmark |
| `icon.svg` / `icon.png` | square icon; PNG is 512 px |
| `social-preview.svg` / `social-preview.png` | 1280×640 link image |

The SVGs are self-contained: Lato Heavy Italic / Regular and STIX Two Text Bold lettering is outlined, not dependent on
installed fonts. Colours: blue `#B6CBDC`, ink `#101418`, light text `#E6E8EB`.

Regenerate the PNG exports with ImageMagick:

```
magick -background none branding/icon.svg branding/icon.png
magick -background none branding/social-preview.svg branding/social-preview.png
```

GitHub's link image can only be set by uploading `social-preview.png` under **Settings → Social preview**; there is no
REST, GraphQL or `gh` route, and repositories share the organization's avatar.

These identity assets live outside `issues/`: changing them does not revise published covers, issue packs or their
catalog digest, and they are distinct from the credited third-party game illustrations.
