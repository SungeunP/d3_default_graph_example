const EXAMPLE_DATA = [
  {
    name : "data1",
    value : 50
  },
  {
    name : "data2",
    value : 100
  },
  {
    name : "data3",
    value : 70
  }
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
  .range(["blue", "red"]);

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
      .attr("width", function (d) { return widthScale(d.value); })
      .attr("height", function (d, i) { return 50; })
      .attr("fill", function (d) { return colorLinear(d.value) })
      .attr("y", function (d, i) { return i * 100 });
  
})