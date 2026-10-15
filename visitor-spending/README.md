# Where the travel dollar goes

Visitor Spending in Australia · Utkarsh Vaishnav · FIT3179 DV II

A single-page story with 12 charts: 3 distinct map idioms, 5 other advanced idioms and 4 basic charts. The four chapters follow the spending footprint, different visitor baskets, travel purpose and changes over time. The layout takes inspiration from the supplied cycling-page reference: a strong teal header, anchor navigation, numbered chapters, metric cards and two charts per row with their explanations underneath. The implementation, tourism data and writing are specific to this project.

## Open the project

1. Extract this ZIP and open the inner `visitor-spending` folder in VS Code.
2. Open Terminal → New Terminal.
3. On Windows run `py -m http.server 8000`. On macOS/Linux run `python3 -m http.server 8000`.
4. Open http://localhost:8000. Keep the terminal running. Ctrl+C stops it.

VS Code Live Server is an alternative. Double-clicking index.html can block external JSON loading. There is no installation or build process.

## Change the appearance

| Change | Edit |
|---|---|
| Background, text and accents | Variables at the top of `style.css`: `--paper`, `--ink`, `--accent` |
| Page width | `--page-width` |
| Gap between charts and writing | `--gap` |
| Main teal banner | `.hero` background |
| Chart cards | `.panel`: padding, border, background |
| Reading callouts | `.callout` |
| Headings and body size | `h1`, `h2`, `.panel h3`, `body` |
| Titles, insights, author and date | Text in `index.html` |
| Chart colours and scales | Corresponding readable file in `specs/` |

Example: change `--paper:#e5f0f3` to `--paper:#edf3f7` for a pale blue canvas. Change `--gap:26px` to `--gap:32px` for more space. Save with Ctrl+S and refresh the page; Ctrl+F5 bypasses a stale browser cache.

Page CSS does not change chart marks. For chart colours, edit `encoding.color.scale.range` in the relevant JSON. Keep the international category palette consistent across charts. In the index chart, `mark.strokeWidth` changes line thickness; `config.axis.labelFontSize` changes axis text. JSON uses double quotes and cannot contain comments or trailing commas.

## Explain the code in the interview

- `index.html` contains the story, four section IDs, chart containers and reading instructions. The `.diagram-grid` places two `.diagram-card` articles side by side. Each contains one figure and its explanation. Below 760px, the grid becomes a single column. The `.hero` rule centres the main topic heading.
- `style.css` controls appearance and stacks columns on small screens.
- `app.js` lists the chart IDs, fetches each specification, sets its width and calls Vega Embed. It does not calculate statistics. Reload after changing browser width if the charts need refitting.
- Each `specs/*.json` defines a chart. Most use Vega-Lite: `data` loads the table, `mark` chooses shapes, `encoding` maps fields to visual channels, and `params` defines interaction. The treemap uses Vega: it turns seven spending totals into rectangles whose areas represent spending.
- `data/*.json` contains small extracted tables and derived columns. CSV copies are provided for inspection. The browser loads JSON, not CSV; keep both consistent when changing data.
- `vendor/` contains local chart libraries, fonts and licences. Do not edit minified third-party code.

The regional map slider filters circles by total spending. Hover charts for exact values. Click the indexed line chart's legend to highlight categories. These interactions do not count as extra idioms.

Every chart has a numbered caption, a plain description, its actual source and a link to its readable JSON. Edit these captions in `index.html`. Tourism Research Australia supplies the spending estimates; ABS supplies state boundaries, not tourism spending.

## Publish on GitHub Pages

1. Create a public repository in your GitHub account.
2. Upload the contents of the inner folder, preserving `data/`, `specs/` and `vendor/`. Keep `index.html` at the repository root.
3. Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
4. Open the public URL provided by GitHub and check the charts.
5. Open the repository's `specs/` folder to confirm that all 12 readable JSON descriptions are publicly accessible.

The deliverable is ready to host; it is not itself a published GitHub website. Update files locally, test, then upload/commit changes to redeploy.

## Definitions and suitability

Maps and destination comparisons use expenditure attributed within Australia. International category charts use the broader total trip budget, including overseas spending. These two measures are clearly labelled and never added together. Snapshots and comparisons use annual periods to March; 2024, 2025 and 2026 are not calendar-year labels. Nominal dollars are not adjusted for inflation.

The data support the charts shown. The international survey combines food, drink and accommodation, so those are not artificially separated. Domestic data provide a separate view of these categories. No domestic/international category-mix chart is used because the expenditure scopes differ. The requested fallback, a within-purpose international mix, is used instead.

The regional map is a Queensland close-up, not an incomplete map claiming national coverage. This uses verified region-level spending and nights from Tourism and Events Queensland. Historical category charts use three observed annual snapshots, not a reconstructed calendar series.

DATA_NOTES.md contains exact sources, extraction references, formulas and limitations. CHART_MATRIX.md explains marks, channels, interactivity, rubric counts and storytelling. The webpage has per-figure source credits and a short source/footer section, following the supplied layout reference.

## Submission checklist

Publish and test the public GitHub URL. Complete the required physical sketch, matching final-design PDF, What/Why/Who/How rationale and assessment declaration. These cannot be replaced by the webpage or this README. Chart counts do not guarantee an HD; accuracy, design, understanding and the remaining assessment components also matter.

## Author and AI declaration

Author: Utkarsh Vaishnav. Updated: 14 October 2026. ChatGPT/Codex assisted with source research, data extraction, formulas, code, layout, writing and verification. Review and understand the work; describe your actual contribution and assistance honestly. The supplied friend's webpage is a structural reference, not the source of tourism data or chart code. The webpage also includes an AI assistance declaration.

## Verification and file size

All 12 charts rendered without browser errors at 1440, 1024 and 390 pixels, with no horizontal page overflow. The regional slider reduced 11 symbols to 2 at the $4b threshold, with all 12 numbered captions present. The initial resources total approximately 1.25 MB uncompressed, including local chart libraries, fonts and all chart data. The HTML is under 25 KB. Raw workbooks, screenshots, browser tooling and development dependencies are excluded from the ZIP.

Structural reference supplied by the user: https://edward6iu.github.io/FIT3179-A2-DATAVIS/ . No cycling data or chart code from that project is included.

The source/formula audit checked source cells, grouping totals, shares, indices, state ratios and growth, regional values, treemap totals, butterfly shares, lollipop differences, waffle rounding and JSON/CSV consistency. A small discrepancy inside the published domestic table is retained and explained in DATA_NOTES.md.

## Different idioms and teal theme

The Sankey, slope, connected-dot and bump charts have been replaced by a treemap, butterfly chart, lollipop chart and waffle chart. The final page has 12 figures: 8 advanced idioms (including 3 distinct maps) and 4 basic charts. See CHART_MATRIX.md for each figure's distinct purpose.

Both webpage and chart palettes now use teal and blue. For Vega-Lite charts edit the colour scale's `range`; for the Vega treemap edit `scales[0].range`. Keep category colours consistent across figures.

Two standard GeoJSON files power the geographic maps: `data/australia-states.geojson` and `data/queensland-tourism-regions.geojson`. The latter comes from official TRA 2026 boundaries. The tile map is deliberately schematic. No spending figures were invented.
