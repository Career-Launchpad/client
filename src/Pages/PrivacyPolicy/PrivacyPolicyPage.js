import React from "react";
import { Redirect } from "react-router-dom";

import FormPage from "../../Shared/FormPage";
import ReactMarkdown from "react-markdown";

import privacyPolicy from "./privacy-policy.md";

const PrivacyPolicyPage = () => {
  const [markdown, setMarkdown] = React.useState(false);
  const [navigate, setNavigate] = React.useState(false);

  React.useEffect(() => {
    fetch(privacyPolicy)
      .then(res => res.text())
      .then(text => setMarkdown(text));
  }, []);

  const handleClose = () => {
    setNavigate(true);
  };

  return (
    <>
      {navigate && <Redirect to="/" />}
      <FormPage onClose={handleClose}>
        <ReactMarkdown source={markdown} />
      </FormPage>
    </>
  );
};

export default PrivacyPolicyPage;
