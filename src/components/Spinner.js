import React, { Component } from "react";
import Rhombus from "../Rhombus.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={Rhombus} alt="loading" />
      </div>
    );
  }
}
