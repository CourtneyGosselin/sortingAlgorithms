import React, { Component, useEffect, useState} from "react";
import * as d3 from "d3";
import BarChart from "./barChart";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Unsorted Data",
      dataset: [12, 31, 22, 17, 25, 18, 29, 14, 9, 3],
      svg: null,
    };
  }

  newBarChart = () => {
    const {dataset, svg} = this.state;
    const w = 600;
    const h = 400;

    const svgNew = d3
    .select(this.refs.chart)
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "bar")
    svgNew
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
  svgNew
    .selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .style("font-size", 18)
    .attr("fill", "#FFFFFF")
    .attr("x", (d, i) => i * 60)
    .attr("y", (d, i) => h - 7 * d - 3)
    .text(d => d);

    this.setState({
      svg: svgNew,
    });
  }

  randomArray = () => {
    const {dataset} = this.state;
    const newdataset = [12, 31, 22, 17, 25, 18, 29, 14, 9, 3];
    for(var i = 0; i < newdataset.length; i++){
      newdataset[i] = Math.floor(Math.random() * Math.floor(100));
    }
    console.log(newdataset);
    this.setState({
      dataset: newdataset,
    }, () => {return dataset})
  }
    


  render() {
    const {title, dataset} = this.state;
    


    
  
    return (
      <div className="main">
        <div  ref="chart" className="float-left" >
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <BarChart width={600} height={400} data={dataset} />
        </div> 
        <div>
          <button type="button" className="btn button-primary float-right text-black" onClick={this.randomArray}>New Data</button>
          <button type="button" className="btn button-primary float-right text-black">Insertion Sort</button>
        </div> 
      </div>
    );
  }
}

export default Main;
