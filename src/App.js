import React, { Component } from "react";
import "./styles/main.scss";
import "./assets/themify-icons/themify-icons.css"

import Header from "./components/layout/Header";
import Overview from "./pages/Overview";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Overview />
      </>
    )
  }
}

export default App;
