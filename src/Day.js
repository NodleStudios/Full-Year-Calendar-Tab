import React, { Component } from "react";
import { decideDayClass } from "./date-helpers";

class Day extends Component {
  visibility = this.props.visibility;
  day = this.props.day;
  month = this.props.month;
  classString =
    "h-8 w-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-300 " +
    decideDayClass(this.visibility, this.day, this.month);

  render() {
    return (
      <div className="flex items-center justify-center text-lg h-8 w-8">
        <div className={this.classString}>{this.day}</div>
      </div>
    );
  }
}

export default Day;
