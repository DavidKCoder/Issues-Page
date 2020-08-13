import React, { useState } from "react";
import "./issues.scss";
import Issue from "./issue";
import Labels from "./Labels/Labels";

const initialState = [
  {
    id: 0,
    text: "How to use eslint-webpack-plugin instead of eslint-loader",
    isOpen: true,
    number: "#1",
    badges: [
      {
        text: "issue: bug report",
        bgColor: "orange",
      },
      {
        text: "issue: proposal",
        bgColor: "#fed330",
      },
    ],
  },
  {
    id: 1,
    text:
      "npx create-react-app myapp not working does not create the react app",
    isOpen: false,
    number: "#1",
    badges: [
      {
        text: "needs triage",
        bgColor: "#b71540",
        color: "white",
      },
    ],
  },
  {
    id: 2,
    text: "Install dependencies fails ",
    isOpen: true,
    number: "#3",
    badges: [
      {
        text: "issue: bug report",
        bgColor: "orange",
      },
      {
        text: "needs triage",
        bgColor: "#b71540",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    text: "Use memo: true flag with SVGR",
    isOpen: true,
    number: "#4",
    badges: [
      {
        text: "issue: proposal",
        bgColor: "#fed330",
      },
      {
        text: "needs triage",
        bgColor: "#b71540",
        color: "white",
      },
    ],
  },
  {
    id: 4,
    text: "TS Watch mode recompiling stuck",
    isOpen: true,
    number: "#5",
    badges: [
      {
        text: "issue: bug report",
        bgColor: "orange",
      },
      {
        text: "needs triage",
        bgColor: "#b71540",
        color: "white",
      },
    ],
  },
  {
    id: 5,
    text: "Create react app is now working after done",
    isOpen: false,
    number: "#6",
    badges: [
      {
        text: "needs triage",
        bgColor: "#b71540",
        color: "white",
      },
    ],
  },
  {
    id: 5,
    text: "Create react app is now working after done",
    isOpen: true,
    number: "#7",
    badges: [
      {
        text: "issue: bug report",
        bgColor: "orange",
      },
      {
        text: "needs triage",
        bgColor: "#b71540",
        color: "white",
      },
    ],
  },
];

const Issues = () => {
  const [value, setValue] = useState();
  const [issues, setIssues] = useState(initialState);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    if (value) {
      const newText = {
        text: value,
        isOpen: true,
        id: Date.now(),
        number: `#${issues.length + 1}`,
        badges: [
          {
            text: "tag: new feature",
            bgColor: "#109446",
            color: "white",
          },
        ],
      };
      setIssues([...issues, newText]);
    }
    setValue("");
    e.preventDefault();
  };


  return (
    <div className="main">
      {/* Form section */}
      <div className="top">
        <Labels
          badges={initialState.map((bad) => {
            return bad.badges.map((b) => {
              return b.bgColor;
            });
          })}
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={issues.text}
            onChange={handleChange}
            className="issue-input"
            placeholder="is:issue is:open"
          />
          <button type="submit" className="issue-btn">
            Add issue
          </button>
        </form>
      </div>

      {/* Issues List  */}
      <div className="issues">
        {issues.map((issue) => {
          return (
            <Issue
              key={issue.id}
              id={issue.id}
              text={issue.text}
              isOpen={issue.isOpen}
              number={issue.number}
              badges={issue.badges}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Issues;
