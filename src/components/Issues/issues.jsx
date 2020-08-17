import React, { useState } from "react";
import "./issues.scss";
import Issue from "./issue";
import { connect } from "react-redux";
import { addIssue } from "../../redux/issuesReducer/actions";
import Labels from "../Labels/Labels";
import LabelsType from "../LabelsType/LabelsType";
import PropTypes from "prop-types";

const Issues = ({ issues, addIssue, labels }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [open, setOpen] = useState(false);
  const [openLabels, setOpenLabels] = useState(false);

  const [attachLabels, SetAttachLabels] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (form.title.trim() && form.description.trim()) {
      const newIssue = {
        text: form.title,
        description: form.description,
        isOpen: true,
        id: Date.now(),
        number: `#${issues.length + 1}`,
        badges: [...attachLabels],
      };
      addIssue(newIssue);

      setForm({ ...form, title: "", description: "" });
      SetAttachLabels([]);
    }
    e.preventDefault();
  };

  const attachLable = (label) => {
    const filteredItems = attachLabels.filter((item) => {
      if (item.id === label.id) {
        return item;
      }
    });

    if (!filteredItems.length) {
      SetAttachLabels([...attachLabels, label]);
      setOpenLabels(false);
    } else alert("You choosed this label");
  };

  return (
    <div className="main">
      {/* Header main Page */}
      <div className="top">
        <Labels />

        <button onClick={() => setOpen(!open)} className="attach-label">
          New issue
          {open ? (
            <i className="fa fa-angle-left"></i>
          ) : (
            <i className="fa fa-angle-right"></i>
          )}
        </button>
      </div>
      {open ? (
        <div className="attach-issues-form">
          <div>
            <form onSubmit={handleSubmit} className="add-issue-form">
              <div>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="issue-input"
                  placeholder="is:issue"
                />
              </div>
              <div>
                <input
                  name="description"
                  onChange={handleChange}
                  value={form.description}
                  className="issue-input"
                  placeholder="add description..."
                />
              </div>
              <button className="add-issue-btn">Add issue</button>
            </form>
            <button
              onClick={() => setOpenLabels(!openLabels)}
              className="attach-label"
            >
              Attach labels{" "}
              {openLabels ? (
                <i className="fa fa-angle-up"></i>
              ) : (
                <i className="fa fa-angle-down"></i>
              )}
            </button>
          </div>

          {openLabels && (
            <div className="drop-down-block">
              <div className="drop-down-labels">
                {labels.map((label) => (
                  <div
                    key={label.id}
                    className="label"
                    onClick={() => attachLable(label)}
                  >
                    <LabelsType label={label} />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="attached-labels">
            {attachLabels.map((label, index) => (
              <LabelsType key={index} label={label} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Issues List  */}
      <div className="issues">
        {issues.map((issue) => {
          return <Issue key={issue.id} issue={issue} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  issues: state.issues.issues,
  labels: state.labels.labels,
});

Issues.propTypes = {
  issues: PropTypes.array,
  addIssue: PropTypes.func,
  labels: PropTypes.array,
};

export default connect(mapStateToProps, { addIssue })(Issues);
