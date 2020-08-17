import React from "react";
import "./LabelsType.scss";

const LabelsType = ({ label }) => {
  return (
    <span
      style={{ background: label.bgColor, color: label.color }}
      className="badge"
    >
      {label.title}
    </span>
  );
};

export default LabelsType;
