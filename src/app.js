import React, { Component } from "react";
import Month from "./Month";

class App extends Component {
  year = new Date().getFullYear();
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  monthDisplays = this.months.map((month) => (
    <Month key={month.toString()} month={month}></Month>
  ));

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <section className="my-10 lg:my-16">
        <div className="wrap">
          <div className="text-4xl font-bold text-center text-gray-400">
            {this.year}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {this.monthDisplays}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
