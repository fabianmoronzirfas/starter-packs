$(document).ready(function() {
  var data = [4, 8, 15, 16, 23, 42];

  // the chart
  // see http://alignedleft.com/tutorials/d3/the-power-of-data
  d3.select("#chart")
    .selectAll("div")
    .data(data)
    .enter().append("div").attr("class", "bar")
    .style("width", function(d) {
      return d * 10 + "px";
    })
    .text(function(d) {
      return d;
    });

  // scatter plot
  // see http://alignedleft.com/tutorials/d3/making-a-scatterplot
  data = [
    [5, 22],
    [100, 32],
    [20, 300],
    [59, 230]
  ];

  var svg = d3.select("#plot")
  .append('svg')
  .attr("width", 500)
  .attr('height', 100);

  svg.selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr('cx', function(d, i) {
    return d[1];

  }).attr('cy', function(d) {
    return d[0];
  }).attr('r', 5);

});