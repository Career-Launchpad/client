import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  dialogContent: {
    backgroundColor: theme.palette.primary.main
  },
  paper: {
    width: "fit-content",
    maxWidth: "38rem",
    padding: "2rem",
    margin: "auto",
    marginTop: "15vmin",
    marginBottom: "10vh",
    display: "flex",
    flexDirection: "column"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPage = ({ onClose, children, transition, loading }) => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleExited = () => {
    onClose();
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      onExited={handleExited}
      TransitionComponent={transition && Transition}
      disableEscapeKeyDown
    >
      <AppBar className={styles.appBar}>
        <Toolbar>
          {onClose && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          )}
          <Typography variant="h6" className={styles.title}>
            Prospect
          </Typography>
        </Toolbar>
        <LinearProgress
          color="secondary"
          style={{ visibility: loading ? "visible" : "hidden" }}
        />
      </AppBar>
      <DialogContent className={styles.dialogContent}>
        {/* <Paper className={styles.paper}>{children}</Paper> */}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default FormPage;
