import React, { Component } from "react";
import * as d3 from "d3";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Unsorted Data",
    };
  }

  componentDidMount() {
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9, 3];
    const w = 600;
    const h = 400;

    const svg = d3
    .select(this.refs.chart)
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "bar")
    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("fill", "#00FFB2")
      .attr("class", "sBar")
      .attr("x", (d, i) => i * 60)
      .attr("y", (d, i) => {
         return h - 7 * d;
       })
      .attr("width", 40)
      .attr("height", (d, i) => 7 * d)
      .append("title")
      .text(d => d);
    svg
      .selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .style("font-size", 18)
      .attr("fill", "#FFFFFF")
      .attr("x", (d, i) => i * 60)
      .attr("y", (d, i) => h - 7 * d - 3)
      .text(d => d);
     }

  render() {
    const {title} = this.state;
    return (
      <div className="main">
        <div  ref="chart" className="float-left" >
          <h1 style={{ textAlign: "center" }}>{title}</h1>
        </div> 
        <div>
          <button type="button" className="btn button-primary float-right text-black">New Data</button>
          <button type="button" className="btn button-primary float-right text-black">Insertion Sort</button>
        </div> 
      </div>
    );
  }
}

export default Main;
