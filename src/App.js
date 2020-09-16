//Acts as a bridge between client and browser with index.html
import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

//Components
import Header from "./components/header.js";

import Footer from "./components/footer.js";

import Main from "./components/main.js";

//Includes
import "./CSS/index.css";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <Header />
         
          <Main />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
