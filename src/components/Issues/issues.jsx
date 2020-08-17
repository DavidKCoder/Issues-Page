import React, { useState, useEffect } from "react";
import "./issues.scss";
import Issue from "./issue";
import { connect } from "react-redux";
import { addIssue } from "../../redux/issuesReducer/actions";
import Labels from "../Labels/Labels";

const Issues = ({ issues, addIssue }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

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
        badges: [
          {
            text: "",
            bgColor: "",
            color: "",
          },
        ],
      };
      addIssue(newIssue);
      setForm({ ...form, title: "", description: "" });
    }
    e.preventDefault();
  };

  return (
    <div className="main">
      {/* Form section */}
      <div className="top">
        <Labels />

        <form onSubmit={handleSubmit} className="add-issue-form">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="issue-input"
            placeholder="is:issue is:open"
          />
          <input
            name="description"
            onChange={handleChange}
            value={form.description}
            className="issue-input"
            placeholder="description..."
          />
          <button type="submit" className="issue-btn">
            Add issue
          </button>
        </form>
      </div>

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
});

export default connect(mapStateToProps, { addIssue })(Issues);
