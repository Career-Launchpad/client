import React from "react";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    header: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    title: {
        paddingRight: theme.spacing(4),
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.header} {...other}>
        <Typography variant="h6" className={classes.title}>{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
});

const ClosableDialog = ({title, onClose, classes, children, ...other }) => {
    return (
        <Dialog onClose={onClose} classes={classes} {...other}>
            {/* <MuiDialogTitle disableTypography>
                <Typography variant="h6">{title}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle> */}
            <DialogTitle onClose={onClose}>{title}</DialogTitle>
            {children}
        </Dialog>
    );
}

export default ClosableDialog;