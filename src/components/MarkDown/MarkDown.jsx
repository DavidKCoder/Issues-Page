import React, { useState, useEffect } from "react";
import { fethchIssueReadme, renderIssueReadme } from "../api/api";
import ReactMarkdown from "react-markdown";

const MarkDown = (props) => {
  const [issueMDURL, setIssueMDURL] = useState();
  const [issuesMD, setissueMD] = useState();

  useEffect(() => {
    fethchIssueReadme(props.repoURL).then((res) =>
      setIssueMDURL(res.data.download_url)
    );

    if (issueMDURL) {
      renderIssueReadme(issueMDURL).then(setissueMD(res.data));
    }
  }, [props.repoURL, issueMDURL]);

  return (
    <React.Fragment>
      <h5 style={{ fontSize: "1.5rem" }}>MD of the repository</h5>
      <ReactMarkdown source={issuesMD} escapeHtml={true} className={issuesMD} />
    </React.Fragment>
  );
};

export default MarkDown;
