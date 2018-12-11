const EXAMPLE_DATA = [
  {
    name : "coffee",
    value : 80
  },
  {
    name : "youtube",
    value : 90
  },
  {
    name : "facebook",
    value : 40
  },
  {
    name : "instagram",
    value : 60
  },
  {
    name : "macbook",
    value : 30
  },
]

const width = 500;
const height = 500;

// scaleLinear
const widthScale = d3.scaleLinear()
  .domain([0,100])
  .range([0, width]);

// color scaleLinear
const colorLinear = d3.scaleLinear()
  .domain([0, 100])
  .range(["white", "red"]);

document.addEventListener("DOMContentLoaded", function () {
  // Add svg
  let canvas = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("transform", "translate(50, 50)")
    .style("border", "black solid 1px");

  // Add bars
  let bars = canvas.selectAll("rect")
    .data(EXAMPLE_DATA)
    .enter()
      .append("rect")
      .attr("width", function (d) { return 0; })
      .attr("height", function (d, i) { return 50; })
      .attr("fill", function (d) { return colorLinear(d.value) })
      .attr("y", function (d, i) { return i * 100 })
      .transition()
      .attr("width", function (d) { return widthScale(d.value); })

  // Add names
  let names = canvas.selectAll("text")
    .data(EXAMPLE_DATA)
    .enter()
      .append("text")
      .attr("y", function (d, i) { return i * 100 + 30; })
      .attr("fill", "white")
      .attr("font-size", "20px")
      .text(function (d) { return d.name; })
})