import React from "react";
import "./issues.scss";
import { NavLink } from "react-router-dom";
import LabelsType from "../LabelsType/LabelsType";
import PropTypes from "prop-types";

const Issue = ({ issue }) => {
  return (
    <NavLink to={"issue/" + issue.id} className="nav-link">
      <div className="issue">
        <div className="header">
          <span className="isOpen">
            {issue.isOpen ? (
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-exclamation-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
            ) : (
              <i className="fa fa-times-circle"></i>
            )}
          </span>
          <h4 className="title">{issue.text}</h4>
          <span className="badges">
            {issue.badges.map((badge) => {
              return <LabelsType key={badge.id} label={badge} />;
            })}
          </span>
        </div>
        <p className="number">
          {issue.number} {issue.opened}
        </p>
      </div>
    </NavLink>
  );
};

Issue.propTypes = {
  issue: PropTypes.object,
};
export default Issue;
