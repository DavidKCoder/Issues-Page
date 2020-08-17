import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIssue } from "../../redux/issueReducer/thunk";
import { addLabel } from "../../redux/issuesReducer/actions";
import { connect } from "react-redux";
import LabelsType from "../LabelsType/LabelsType";
import PropTypes from "prop-types";

const Issue = ({ issue, getIssue, labels, addLabel }) => {
  const [open, setOpen] = useState(false);
  const params = useParams();

  const refreshPage = () => {
    const id = params.id;
    getIssue(id);
  };

  useEffect(() => {
    refreshPage();
  }, [refreshPage]);

  const addNewLabel = (label) => {
    const filteredItems = issue.badges.filter((item) => {
      if (item.id === label.id) {
        return item;
      }
    });

    if (!filteredItems.length) {
      addLabel(label, issue.id);
      setOpen(false);
    } else alert("You choosed this label");
  };

  return (
    <div className="issue-page">
      {/*  Issue  block */}
      <h2>{issue.text}</h2>
      <div className="description">⋯ {issue.description}</div>

      <div className="issue-page-label">
        {issue.badges &&
          issue.badges.map((label, index) => (
            <LabelsType key={index} label={label} />
          ))}
      </div>

      {/* Add label for issue */}
      <button onClick={() => setOpen(!open)} className="add-issue-btn">
        Add labels{" "}
        {open ? (
          <i className="fa fa-angle-up"></i>
        ) : (
          <i className="fa fa-angle-down"></i>
        )}
      </button>

      {open && (
        <div className="drop-down-block">
          <div className="drop-down-labels">
            {labels.map((label) => (
              <div
                key={label.id}
                className="label"
                onClick={() => addNewLabel(label)}
              >
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
  issue: state.issue.issue,
  labels: state.labels.labels,
});

Issue.propTypes = {
  issue: PropTypes.object,
  getIssue: PropTypes.func,
  labels: PropTypes.array,
  addLabel: PropTypes.func,
};
export default connect(mapStateToProps, { getIssue, addLabel })(Issue);
