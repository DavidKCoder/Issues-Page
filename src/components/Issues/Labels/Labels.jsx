import React, { useState } from "react";
import "./Label.scss";

const Labels = ({ badges }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="drop-down">
      <div className="drop-title" onClick={() => setOpen(!open)}>
        <i className="fa fa-tag"></i>
        Label
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
              <form action="" className="filter-form">
                <input type="text" placeholder="Filter labels" />
              </form>
            </div>

            {/* <ul>
              {badge
                .filter((name) => {
                  //remove names that do not match current filter text
                  return name.indexOf("orange") >= 0;
                })
                .map((name) => {
                  return <li style={{background: name}}>O</li>;
                })}
            </ul> */}

            <div className="label label-1">
              <i>●</i> issue: bug report
            </div>
            <div className="label label-2">
              <i>●</i>tag: new feature
            </div>
            <div className="label label-3">
              <i>●</i>issue: question
            </div>
            <div className="label label-4">
              <i>●</i>issue: proposal
            </div>
            <div className="label label-5">
              <i>●</i>needs triage
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Labels;
