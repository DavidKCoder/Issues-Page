import React from "react";
import "./issues.scss";
import { Link } from "react-router-dom";

const Issues = (props) => {
  return (
    <div className="issues">
      {props.issues.map((issue) => {
        return (
          <div className="issue" key={issue.id}>
            <Link
              to={{
                pathname: "/issue/${issue.id}",
                details: {
                  issue,
                },
              }}
            />
            <div className="header d-inline">
              <span className="status">
                {issue.state === "open" ? (
                  <i class="fa fa-exclamation-circle"></i>
                ) : (
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                )}
              </span>
              <h5 className="title d-inline">{issue.title}</h5>
            </div>
            <Link />
            <div className="label d-inline">
              {issue.labels.length
                ? issue.labels.map((label) => {
                    return (
                      <span
                        key={label.id}
                        style={{ background: `#${label.color}` }}
                      >
                        {label.name}
                      </span>
                    );
                  })
                : null}
            </div>
            <div className="infoTicket">
              <span className="id">#${issue.id}</span>
              <span className="createAt">opened {issue.created_at}</span>
              <span className="by">by {issue.user.login}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Issues;
