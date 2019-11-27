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
    marginTop: "15vmin",
    marginBottom: "10vh",
    display: "flex",
    flexDirection: "column"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPage = ({ onClose, ...props }) => {
  const classes = useStyles();
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
        <Paper className={classes.paper}>{props.children}</Paper>
      </DialogContent>
    </Dialog>
  );
};

export default FormPage;
