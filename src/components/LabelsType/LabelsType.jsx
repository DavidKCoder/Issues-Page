import React from "react";
import "./LabelsType.scss";

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

export default LabelsType;
