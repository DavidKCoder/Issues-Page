import React, { useState } from "react";
import "./issues.scss";
import Issue from "./issue";

const Issues = () => {
  const [issues, setIssues] = useState([
    {
      id: 0,
      text: "Hub Login command to initialise authentication",
      isOpen: true,
      number: "#8672",
      badges: [
        {
          text: "issue: bug report",
          color: "#EE5A24",
        },
        {
          text: "issue: proposal",
          color: "#ffd32a",
        },
      ],
    },
    {
      id: 1,
      text: "Use memo: true flag with SVGR",
      isOpen: false,
      number: "#86732",
      badges: [
        {
          text: "needs triage",
          color: "#EA2027",
        },
      ],
    },
    {
      id: 2,
      text: "Error during React project Run using npm start",
      isOpen: true,
      number: "#8672",
      badges: [
        {
          text: "issue: bug report",
          color: "#EE5A24",
        },
        {
          text: "issue: proposal",
          color: "#ffd32a",
        },
      ],
    },
    {
      id: 3,
      text: "Node packages do not update",
      isOpen: true,
      number: "#8672",
      badges: [
        {
          text: "issue: bug report",
          color: "#EE5A24",
        },
        {
          text: "issue: proposal",
          color: "#ffd32a",
        },
      ],
    },
    {
      id: 4,
      text: "Issue Related to React",
      isOpen: false,
      number: "#8672",
      badges: [
        {
          text: "needs triage",
          color: "#EA2027",
        },
      ],
    },
    {
      id: 5,
      text: "After create-react-app, `npm start` not work",
      isOpen: true,
      number: "#8672",
      badges: [
        {
          text: "issue: bug report",
          color: "#EE5A24",
        },
        {
          text: "issue: proposal",
          color: "#ffd32a",
        },
      ],
    },
  ]);

  return (
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
  );
};

export default Issues;
