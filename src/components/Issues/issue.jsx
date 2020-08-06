import React from "react";
import "./issues.scss";

const Issue = (props) => {
  return (
    <div className="issue">
      <div className="header">
        <span className="isOpen">
          {props.isOpen ? (
            <svg
              className="octicon-issue-opened open"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"
              ></path>
            </svg>
          ) : (
            <i class="fa fa-times-circle"></i>
          )}
        </span>
        <h4 className="title">{props.text}</h4>
        <span className="badges">
          {props.badges.map((badge) => {
            return (
              <span
                key={props.id}
                className="badge"
                style={{ background: badge.color }}
              >
                {badge.text}
              </span>
            );
          })}
        </span>
      </div>
      <p>{props.number}</p>
    </div>
  );
};

export default Issue;
