import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { select } from "d3";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [10, 20, 30, 40, 20];

    const svg = d3.select(chartRef.current);

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 300]);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 25)
      .attr("width", (d) => xScale(d))
      .attr("height", 20)
      .on("mouseover", function (d) {
        d3.select(this).attr("fill", "red");
        svg
          .append("text")
          .attr("id", "tooltip")
          .attr("x", xScale(d))
          .attr("y", +d3.select(this).attr("y") + 15)
          .text({ d });
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "steelblue");
        svg.select("#tooltip").remove();
      });
  }, []);

  return <svg width="400" height="200" ref={chartRef}></svg>;
};

export default BarChart;
