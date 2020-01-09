import React from "react";
import ReactMarkdown from "react-markdown";

import privacyPolicy from "./privacy-policy.md";

const PrivacyPolicyPage = () => {
  const [markdown, setMarkdown] = React.useState(false);
  React.useEffect(() => {
    fetch(privacyPolicy)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  }, []);

  return (
    <ReactMarkdown source={markdown} />
  );
}

export default PrivacyPolicyPage;
