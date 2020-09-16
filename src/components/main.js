import React, { Component, useEffect, useState} from "react";
import BarChart from "./barChart";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Unsorted Data",
      dataset: [12, 31, 22, 17, 25, 18, 29, 14, 9, 3],
    };
  }

  // Sort data using bubble sort
  bubbleSort = () => {
    const {dataset, sortSteps} = this.state;
    const tempDataSet = [];
    const testData = [];

    for(i = 0; i<dataset.length; i++){
      tempDataSet[i] = dataset[i];
      testData[i] = dataset[i];
    }
   // console.log("Data before: " + dataset);
    for(var i = 0; i < dataset.length-1; i++){
        for(var j = 0; j < dataset.length - i - 1; j++){
            if(tempDataSet[j]> tempDataSet[j+1]){
               var temp = tempDataSet[j];
               tempDataSet[j] = tempDataSet[j+1];
               tempDataSet[j+1]= temp;
               this.setState({
                dataset: tempDataSet,
              },)
            }
        }
    }
    if(this.isSorted(tempDataSet)){
      console.log("The array is sorted");
    }else{
      console.log("The array is not sorted");
    }

   }
  
   // Checks if the array is sorted
   isSorted = (arr) =>{
    for(var i = 0; i < arr.length - 2; i++){
      if(arr[i] > arr[i+1]){
        return false;
      }
    }
    return true;
  }

  // Compares arraus to check if the new array is generated
  compareArrays = (array1, array2) =>{
    if(JSON.stringify(array1)==JSON.stringify(array2)){
      return true;
    }
  return false;
  }

  // Generate random array for the new data
  randomArray = () => {
    const {dataset} = this.state;
    const newdataset = [12, 31, 22, 17, 25, 18, 29, 14, 9, 3];
    for(var i = 0; i < newdataset.length; i++){
      newdataset[i] = Math.floor(Math.random() * Math.floor(100));
    }

    console.log(newdataset);

    if(this.compareArrays(dataset, newdataset)){
      console.log("Generated array matches original");
    }else{
      console.log("New generated array");
    }
    
    this.setState({
      dataset: newdataset,
    }, () => {return dataset})
  }
    

  // Visual rendering
  render() {
    const {title, dataset} = this.state;

    return (
      <div className="main d-flex justify-content-center">
        <div  ref="chart" className="float-left" >
          <h1 style={{ textAlign: "center" }}>{title}</h1>
          <BarChart width={600} height={400} data={dataset} />
        </div> 
        <div>
          <button type="button" className="btn button-primary float-right text-black" onClick={this.randomArray}>New Data</button>
          <button type="button" className="btn button-primary float-right text-black" onClick={()=>this.bubbleSort()}>Bubble Sort</button>
        </div> 
      </div>
    );
  }
}

export default Main;
