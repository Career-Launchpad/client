import React from "react";
import ReactMarkdown from "react-markdown";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10
  },
  field: {
    margin: "10px"
  },
  smallField: {
    minWidth: 260,
    flexGrow: 1
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  button: {
    margin: "20px 20px 0 0"
  }
}));

const Dialog = ({ children, onSubmit, cancelText, submitText, prompt }) => {
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <ReactMarkdown className="markdown" source={prompt} linkTarget="_blank" />
      {children}
      <div className={styles.buttonContainer}>
        {cancelText && (
          <Button
            variant="contained"
            onClick={() => onSubmit(false)}
            className={styles.button}
          >
            {cancelText}
          </Button>
        )}
        {submitText && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit(true)}
            className={styles.button}
          >
            {submitText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Dialog;
