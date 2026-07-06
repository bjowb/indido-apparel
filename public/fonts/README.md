# Place Custom Font Files Here

Place your "Ade Display" font files in this folder. The project's styles are pre-configured to load them from this location.

Supported files:
- `AdeDisplay.woff2` (Recommended for web performance)
- `AdeDisplay.woff`
- `AdeDisplay.ttf`
- `AdeDisplay.otf`

### CSS Configuration:
Once you place the file here, the `@font-face` declaration in `src/styles/global.css` will automatically resolve it and apply the font to your homepage hero title (`.hero-title`).
