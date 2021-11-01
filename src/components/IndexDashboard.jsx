import React, { Component, Fragment } from "react";
import Exam from "./Exam";

class IndexDashboard extends Component {
  render() {
    return (
      <Fragment>
        <h2>List of Exams</h2>
        <Exam />
      </Fragment>
    );
  }
}
export default IndexDashboard;
