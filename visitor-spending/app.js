// Each chart has one HTML container and one readable JSON specification.
const chartIDs = [
  "map_international_nightly",
  "chart_domestic_categories",
  "chart_budget_treemap",
  "chart_market_heatmap",
  "chart_purpose_mix",
  "map_domestic_regions",
  "chart_holiday_waffle",
  "chart_purpose_bars",
  "chart_category_index",
  "chart_budget_butterfly",
  "map_spending_change",
  "chart_nightly_lollipop"
];
const chartViews = {};
async function drawChart(id) {
  const element = document.getElementById(id);
  try {
    const response = await fetch('specs/' + id + '.json');
    if (!response.ok) throw new Error('Cannot load ' + id);
    const spec = await response.json();
    spec.width = element.clientWidth;
    spec.autosize = {type: 'fit', contains: 'padding'};
    const result = await vegaEmbed(element, spec, {actions: false, renderer: 'svg'});
    chartViews[id] = result.view;
  } catch (error) {
    element.textContent = 'Chart unavailable. Open this project through a local server.';
    console.error(error);
  }
}
Promise.all(chartIDs.map(drawChart)).then(() => {
  document.body.dataset.rendered = 'true';
});
