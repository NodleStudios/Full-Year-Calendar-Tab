import React, { Component } from "react";

class App extends Component {
  state = {};

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return <div className=" text-5xl">Hello World</div>;
  }
}

export default App;
