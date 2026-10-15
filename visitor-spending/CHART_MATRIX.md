# Chart matrix

12 figures: **8 advanced idioms**, including **3 distinct map idioms**, and **4 basic idioms**, using the classification supplied by the student. This count does not guarantee a grade.

| Figure | JSON file | Idiom | Classification | Question answered |
|---|---|---|---|---|
| 1 | `specs/map_international_nightly.json` | Choropleth map | Advanced — map | Compare average spending intensity across states, independent of total visitor-nights. |
| 2 | `specs/chart_domestic_categories.json` | Bar chart | Basic | Separate accommodation, food, transport and entertainment for residents’ overnight travel. |
| 3 | `specs/chart_budget_treemap.json` | Treemap | Advanced | Show the overall full-trip spending composition for overseas visitors. |
| 4 | `specs/chart_market_heatmap.json` | Heatmap | Advanced | Compare category preferences across five home countries using within-country shares. |
| 5 | `specs/chart_purpose_mix.json` | 100% stacked bar | Basic | Show how budget composition varies by reason for visiting. |
| 6 | `specs/map_domestic_regions.json` | Proportional-symbol map | Advanced — map | Locate total spending within Queensland and compare spending per night. |
| 7 | `specs/chart_holiday_waffle.json` | Waffle chart | Advanced | Summarise the holiday contribution to tour and entertainment spending as 75 of 100 squares. |
| 8 | `specs/chart_purpose_bars.json` | Grouped bars | Basic | Separate tours from entertainment and compare their amounts by travel purpose. |
| 9 | `specs/chart_category_index.json` | Indexed line chart | Basic | Compare category growth from a common 2024 base of 100. |
| 10 | `specs/chart_budget_butterfly.json` | Butterfly chart | Advanced | Compare budget shares at the beginning and end of the period. |
| 11 | `specs/map_spending_change.json` | Tile cartogram | Advanced — map | Compare state total-spending growth without large states dominating map area. |
| 12 | `specs/chart_nightly_lollipop.json` | Lollipop chart | Advanced | Show the signed change in average spending per night by state. |

## Reading order

1. Where the money goes: spending intensity by state, then the everyday costs of residents’ overnight trips.
2. Budgets and destinations: the overseas-visitor budget, differences by home country and travel reason, then Queensland regional spending.
3. Tours and entertainment: the holiday share of experience spending, then tours and entertainment separately.
4. What has changed: category growth, changing budget shares, state growth and changes in nightly averages.

## Marks, interaction and interpretation

The maps use polygon colour, circle area plus colour, and equal-sized coloured tiles respectively. The treemap uses area; heatmap uses colour; waffle uses square counts; butterfly uses mirrored bar length; lollipop uses position and stem length. Basic bars use length and lines use position over time. Hover exposes exact values. The Queensland slider filters by total spend. The indexed-line legend highlights selected categories.

Maps use spending attributed within Australia. Overseas-visitor category charts use the broader full trip budget, which includes costs paid overseas. These different totals are labelled and are never added together. All years mean annual periods ending in March.

The waffle gives a single rounded proportion; the grouped bar gives separate amounts for tours and entertainment across all purposes. The butterfly shows composition; the indexed lines show relative dollar growth. The tile map shows total-spending growth; the lollipop shows change in spend per night. Each is a different measure or reading task.

The Sankey, slope, connected-dot and bump charts have been removed. There is no unsupported origin-to-destination network or invented split of accommodation and food.

Layout: six rows of two charts on desktop, with each explanation below its figure. The main topic is centred. Charts stack below 760px.
