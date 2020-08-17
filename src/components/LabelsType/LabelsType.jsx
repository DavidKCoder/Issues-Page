import React from "react";
import "./LabelsType.scss";
import PropTypes from "prop-types";

const LabelsType = ({ label }) => {
  return (
    <div
      style={{ background: label.bgColor, color: label.color }}
      className="badge"
    >
      {label.title}
    </div>
  );
};

LabelsType.propTypes = {
  label: PropTypes.array,
};

export default LabelsType;
