import React, { useState } from "react";
import "./Label.scss";
import { connect } from "react-redux";
import LabelsType from "../LabelsType/LabelsType";
import { addLabel } from "../../redux/labelsReducer/actions";
import PropTypes from "prop-types";

const Labels = ({ labels, addLabel }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    label: "",
    bgColor: "#000",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.label.trim() && form.bgColor.trim()) {
      const newLabel = {
        title: form.label,
        bgColor: form.bgColor,
        id: Date.now(),
      };
      addLabel(newLabel);
      setForm({ ...form, label: "", bgColor: "" });
    }
  };

  return (
    <div className="drop-down">
      <div className="drop-title" onClick={() => setOpen(!open)}>
        <i className="fa fa-tag"></i>
        Labels
        {open ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </div>
      {open && (
        <div className="drop-down-block">
          <div className="drop-down-labels">
            <div className="drop-down-form">
              <form className="filter-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="label"
                  value={form.label}
                  placeholder="Add new label..."
                  onChange={handleChange}
                />
                <input
                  type="color"
                  name="bgColor"
                  value={form.bgColor}
                  onChange={handleChange}
                  className="input-color"
                />
                <button className="add-label-btn">Add</button>
              </form>
            </div>

            {labels.map((label) => (
              <div key={label.id} className="label">
                <LabelsType label={label} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  labels: state.labels.labels,
});

Labels.propTypes = {
  labels: PropTypes.array,
  addLabel: PropTypes.array,
};

export default connect(mapStateToProps, { addLabel })(Labels);
