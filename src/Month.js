import React, { Component } from "react";
import {
  getFirstDayOfMonthDayOfWeek,
  getMonth,
  getDaysInMonth,
} from "./date-helpers";
import Day from "./Day";

class Month extends Component {
  month = getMonth(this.props.month);
  daysInMonth = getDaysInMonth(this.props.month);
  firstDayDayofWeek = getFirstDayOfMonthDayOfWeek(this.props.month);

  render() {
    return (
      <div className="">
        <h2 className=" font-medium text-xl text-gray-400 dark:text-gray-300 text-center">
          {this.month}
        </h2>
        <div className="grid grid-cols-7 gap-1 mt-2">
          {[...Array(this.firstDayDayofWeek - 1)].map((day, i) => (
            <Day
              key={i}
              visibility={false}
              day={0}
              month={this.props.month}
            ></Day>
          ))}
          {[...Array(this.daysInMonth)].map((day, i) => (
            <Day
              key={i + 1}
              visibility={true}
              day={i + 1}
              month={this.props.month}
            ></Day>
          ))}
        </div>
      </div>
    );
  }
}

export default Month;
