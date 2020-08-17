import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIssue } from "../../redux/issueReducer/thunk";
import { addLabel } from "../../redux/issuesReducer/actions";
import { connect } from "react-redux";
import LabelsType from "../LabelsType/LabelsType";

const Issue = ({ issue, getIssue, labels, addLabel }) => {
  const [open, setOpen] = useState(false);

  const params = useParams();
  useEffect(() => {
    const id = params.id;
    getIssue(id);
  }, [issue]);

  return (
    <div>
      <h2>{issue.text}</h2>
      <p>{issue.description}</p>
      <button onClick={() => setOpen(!open)}>
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
                onClick={() => addLabel(label, issue.id)}
              >
                <LabelsType label={label} />
              </div>
            ))}
          </div>
        </div>
      )}
      {issue &&  issue.badges.map((label) => (
        <LabelsType key={label.id} label={label} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  issue: state.issue.issue,
  labels: state.labels.labels,
});
export default connect(mapStateToProps, { getIssue, addLabel })(Issue);
