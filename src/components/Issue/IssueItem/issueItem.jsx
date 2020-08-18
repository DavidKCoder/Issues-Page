import React from "react";
import "../IssueStyle/issueStyle.scss";
import { NavLink } from "react-router-dom";
import LabelsType from "../../Label/LabelItem/LabelItem";
import PropTypes from "prop-types";
import Icon from "../../Icon/Icon";

const Issue = ({ issue }) => {
  return (
    <NavLink to={`issue/${issue.id}`} className="nav-link">
      <div className="issue">
        <div className="header">
          <span className="isOpen">
            {issue.isOpen ? <Icon /> : <i className="fa fa-times-circle"></i>}
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
