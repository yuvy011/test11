# Official data, extraction and calculations

## Measures and periods

All monetary values are nominal/current-price Australian dollars. The selected snapshot is the annual period to March 2026, with March 2025 destination comparisons and March 2024–2026 category history. An axis label “2026” means the 12 months to March 2026, not the March quarter or calendar 2026. No calendar, financial-year or COVID-baseline series is fabricated.

Two clearly separated expenditure scopes are necessary:

1. **Within Australia:** IVS regional expenditure and spend in Australia for the maps, state lollipop chart and opening international metrics. DoTS domestic overnight expenditure for the domestic bar and Queensland regional map.
2. **Whole international trip:** IVS category, purpose and source-market tables. Includes overseas purchases and international travel costs. These charts total $57.5745b, whereas spend in Australia totals $40.8975b. Do not combine the two or claim category links are wholly spending inside Australia.

IVS estimates concern international visitors aged 15+. DoTS domestic estimates concern residents aged 14+. Domestic day trips are excluded from this project's domestic charts. Survey estimates are not a census of payments; no causal or significance claim is made. Nights are visitor-nights, not hotel room nights. Within-Australia expenditure includes items beyond accommodation, so spend per night is not a nightly hotel price.

## Sources and exact downloads

Retrieved 14 October 2026. Each webpage figure includes its actual source; exact downloads and calculations are documented here.

**TRA International Visitor Survey, March 2026**
https://www.tra.gov.au/en/tourism-statistics/international-tourism-results/international-tourism-results-march-2026
Workbook: https://www.tra.gov.au/content/dam/austrade-assets/global/wip/tra/documents/international-visitor-survey-results-march-quarter-2026.xlsx

**TRA International Visitor Survey, March 2025 (revised release)**
https://www.tra.gov.au/en/tourism-statistics/international-tourism-results/international-tourism-results-march-2025
Workbook: https://www.tra.gov.au/content/dam/austrade-assets/global/wip/tra/documents/international-visitor-survey-results-march-quarter-2025.xlsx

**TRA International Visitor Survey, March 2024**
https://www.tra.gov.au/en/tourism-statistics/international-tourism-results/international-tourism-results-march-2024
Workbook: https://www.tra.gov.au/content/dam/austrade-assets/global/wip/tra/documents/ivs/tra-ivs-tourism-results-ye-mar-2024-2023.xlsx

**TRA Domestic Tourism Statistics, March 2026**
https://www.tra.gov.au/en/tourism-statistics/domestic-tourism-statistics-results/dots-march-2026
Workbook: https://www.tra.gov.au/content/dam/austrade-assets/global/wip/tra/documents/dots/tra-dots-march-quarter-2026-compared-to-march-quarter-2025.xlsx

**Tourism and Events Queensland, DoTS dashboard, annual period to March 2026**
https://teq.queensland.com/domestic-visitation.html
The “Regional overnight performance — appendix detail” table contains the 11 Queensland regions' spend and nights. Its public page dataset is named `regOvernight`; source attribution on the page is TRA DoTS. These are published rounded values. The map is expressly Queensland-only.

**ABS state boundaries**
https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/STE/FeatureServer
Simplified ASGS 2021 state/territory polygons retained for geographic context; projection is conic equal-area. The map geometry has no economic estimates independent of the linked survey table. Queensland regional boundaries now use the official TRA 2026 shapefile, converted to GeoJSON. Symbols use interior points computed from those boundaries, not hand-picked coordinates or transaction locations.

## Source cells and category membership

### State estimates and national metrics

IVS 2026 Table 3 rows 6:13: NSW, VIC, QLD, SA, WA, TAS, NT, ACT. Columns F/G give nights (thousands) for 2025/2026; J/K give regional expenditure ($m). Both periods are taken from this one release. `international-states.json` preserves values and source references. `nightly-change.json` subtracts the two nightly ratios, so the choropleth and lollipop chart use the same underlying estimates.

IVS 2026 Table 1: K31 = 2026 spend in Australia ($m); G31 = nights ('000); O31 = whole-trip spend ($m). The opening national nightly average is K31/G31 × 1,000. State numbers should not be summed or averaged to recreate a national per-night estimate; use its own national numerator/denominator.

### International categories

Each release's Table 8, column H, contains all-market category totals, including the Other source-market group. Row 13 is the total. This supplies the 2024–2026 category history. Use the published 2025 revised workbook, not the original release. The 2026 data tables' two-year state estimates are preferred for state comparisons. Category history necessarily uses successive releases and may be affected by revisions; no estimate of a revision effect is available.

| Display category | Table 7/8 rows | Meaning |
|---|---|---|
| Food, drink & stay | 8 | Published combined Food, drink & accommodation |
| Transport | 5,7 | Airfares plus Transportation; includes international airfare costs |
| Tours | 6 | Published Tours |
| Shopping | 9 | Published Shopping |
| Entertainment | 10 | Published Entertainment |
| Education | 11 | Education expenditure |
| Other | 12 | Other Expenditure |

Groups are exclusive and exhaustive. No assumed split of food versus accommodation is made. Tours remain separate from transport and entertainment. A share uses the complete trip budget, not just the focus categories.

IVS 2026 Table 7 columns B:F are Holiday, Visiting friends and relatives (VFR), Business, Education, Other purpose. Employment is included in Other purpose. Category rows above supply all 35 combinations; row 13 provides each purpose's total. The stacked bars, grouped leisure bars and waffle use this same `purpose-categories` dataset. VFR is displayed as “Friends & family”.

IVS 2026 Table 8 columns B:F contain China, UK, USA, New Zealand and India; row 13 is the corresponding market denominator. The heatmap is share of each market's total trip spend. 

### Domestic categories

DoTS 2026 Table 4b column C is the annual period to March 2026. Row 25 is the published total. The calendar 2025 column B is not used.

| Display group | Rows |
|---|---|
| Accommodation | 15 |
| Food & drink | 16,17,18: groceries, drinks, meals |
| Transport | 6,9,10,11,12,13,14: airfares, hire, fuel, repairs, taxi, local and long-distance public transport |
| Entertainment | 20 |
| Tours | 7,8: package and organised tours |
| Shopping | 19 |
| Other | 21,22,23,24: gambling, education, conferences and other |

The domestic category definition is suitable for the domestic bar, not an assertion that it is identical to the international category survey. For this reason the proposed domestic/international 100% mix comparison was replaced by the user's within-purpose fallback.

### Queensland regional close-up

TEQ `regOvernight` rows provide region, visitors ('000), nights ('000), average stay, expenditure ($m), published spend per night and spend per visitor. The extract retains spend and nights and recalculates their ratio. The Queensland total row is excluded from the symbols. SGBR is expanded to Southern Great Barrier Reef. All 11 published regional rows are included. Small differences against statewide totals can reflect rounding or unallocated spending; no balancing region is invented.

## Formula review

- A$ billion = published A$ million / 1,000.
- A$ per visitor night = expenditure ($m) / nights ('000) × 1,000. The factor 1,000 reconciles units. Calculate ratios of totals, not a mean of individual or state averages.
- Category share = category expenditure / published total of the same market/purpose/year. A value of 0.35 displays as 35%.
- Category index = 100 × category spend in year y / that category's 2024 spend. Baseline 100 is not a percentage share. A rise from 100 to 150 is +50% nominal growth.
- State growth (%) = 100 × (2026 spend / 2025 spend − 1). The tile map uses this measure, not the change in nightly spending.
- Absolute state change ($m) = 2026 spend − 2025 spend, shown in tooltips.
- Category share change (percentage points) = 100 × (2026 share − 2024 share); the butterfly chart plots endpoint shares, not this difference as a dollar amount.
- Symbol area is proportional to spend; the Vega-Lite size channel supplies area, not radius. Colour uses a sequential nightly-spend scale. Slider filtering removes small regions without changing size/colour domains.
- Choropleth colour uses the normalized nightly ratio. State land area is not a denominator. Tile area is equal for every state and encodes no quantity.
- 100% stacked bars normalize each purpose's complete component sum to one. Tooltip shares use published row totals; any floating-point rounding difference is negligible.

### New chart calculations

- Treemap: seven 2026 all-market category values from `category-history.json`, reshaped into `budget-tree.json`. Each rectangle's area is proportional to its spending. The root is a layout container and is not an eighth spending category.
- Butterfly: `budget-comparison.json` retains the 2024 and 2026 category shares. `signed_share` is negative for the left-hand 2024 bars and positive for the right-hand 2026 bars. This sign is only a layout device: actual shares are positive. Axis labels show absolute percentages.
- Lollipop: `nightly-change.json` stores current, previous and current minus previous A$ per visitor night for each state. Positive means a higher average; negative means a lower average. These differences do not indicate statistical significance.
- Waffle: holiday spending on Tours plus Entertainment divided by spending on those two categories across all five purposes. Exact share = 3.8754230687 / 5.1681448347 = 74.98673494%. This rounds to 75 of 100 squares. Each square represents approximately 1% of spending, not one visitor. Tooltips retain the exact share and amounts; Other travel reasons is the remaining 25 squares.

## Missing data, precision and limitations

No suppressed `np` cell is treated as zero. The selected latest cross-tab cells and historical all-market category totals are numeric; suppressed historical country/category cells are not used. The older category tables' precision differs, so calculations use retained published values without false balancing corrections. Display rounding is applied only to labels/tooltips.

DoTS replaced NVS in January 2025. No unadjusted pre-COVID NVS growth is used. All domestic charts use the current 2026 annual period, so the domestic map is coloured by nightly spend rather than potentially incompatible historical growth. Latest available releases can be newer than March; this project deliberately uses the user's selected March comparison window and matching regional publication.

These are aggregate survey estimates. They do not explain why a person spends more, identify individual tourists or establish statistically significant state differences. The timeline has three observed annual snapshots and cannot support a detailed COVID-recovery story. Inflation, trip duration and visitor composition can all change observed averages. The broad international category budget is not a precise measure of cash paid only while physically inside Australia.

### Published domestic-table discrepancy

The 19 item rows in DoTS Table 4b column C sum to $107,530.931m, but the published total is $107,595.995m: a $65.064m gap, or about 0.0605%. The grouped bar reproduces every published item exactly. This gap is larger than ordinary rounding at the displayed precision; the workbook does not explain it. It is not allocated to Other or silently “corrected”. Shares use the published total and therefore sum to approximately 99.9395%. The top-three share still rounds to 87%. The published total is retained for the KPI.

## Official GeoJSON update and teal presentation

`australia-states.geojson` is a standard FeatureCollection of the previously sourced simplified ABS state polygons. The choropleth reads its `features` property. No spending estimate was changed by converting the file format.

`queensland-tourism-regions.geojson` is derived from TRA’s official 2026 shapefile:
https://www.tra.gov.au/en/profiles/tourism-regions-maps
https://www.tra.gov.au/content/dam/austrade-assets/global/wip/tra/documents/regional/tourism-regions-maps-2026/tra-tourism-regions-2026-shapefiles.zip

Boundary source CRS: GDA2020 (EPSG:7844). Convert to Australian Albers (EPSG:3577), merge the three Southern Great Barrier Reef components, compute a representative point guaranteed inside each original geometry, simplify at 1,000 metres with topology preservation, convert to WGS84 (EPSG:4326), and round boundary coordinates to four decimal places. This reduces download size. Interior points are cartographic anchors only; the source survey contains no transaction coordinates. All 11 point locations were checked against their original region polygons.

Southern Great Barrier Reef combines Bundaberg, Gladstone and Capricorn Coast; other names join directly. Official TEQ confirmation of the three-region grouping:
https://www.queensland.com/us/en/places-to-see/destinations/southern-great-barrier-reef

Every spend/night value, period, category membership and ratio remains unchanged. The webpage theme uses teal; all chart palettes now use coordinated teal/blue shades, preserving categorical distinctions and sequential ordering. The tile cartogram remains schematic by design and does not claim to reproduce exact boundaries.

For Vega/D3 rendering, exterior boundary rings use clockwise winding and holes the opposite winding; this affects drawing convention only, not the underlying boundary locations.
