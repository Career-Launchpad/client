import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

import AddStudentForm from "./AddStudentForm";

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
    maxWidth: "38rem",
    padding: "2rem",
    margin: "auto",
    marginTop: "15vh",
    marginBottom: "20vh",
    display: "flex",
    flexDirection: "column"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddStudentPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [navigate, setNavigate] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleNavigate = () => setNavigate(true);
  const handleFormSubmit = student => {
    console.log(student);
    handleClose();
  };

  return (
    <>
      {navigate && <Redirect to="/" />}
      <Dialog
        fullScreen
        open={open}
        onClose={handleNavigate}
        onExited={handleNavigate}
        TransitionComponent={Transition}
        disableEscapeKeyDown
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Career Debut
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Paper className={classes.paper}>
            <AddStudentForm onSubmit={handleFormSubmit} />
          </Paper>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddStudentPage;
