import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "0 -10px"
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
    justifyContent: "flex-end"
  },
  button: {
    margin: "30px 0 0 20px"
  }
}));

const Dialog = ({ onSubmit, cancelText, submitText, prompt }) => {
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <Typography variant="body1">
        <ReactMarkdown source={prompt} />
      </Typography>
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmit(true)}
          className={styles.button}
        >
          {submitText}
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
