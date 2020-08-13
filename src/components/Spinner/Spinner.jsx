import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <React.Fragment>
      <div class="spinner">
        <span class="spinner-inner-1"></span>
        <span class="spinner-inner-2"></span>
        <span class="spinner-inner-3"></span>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
