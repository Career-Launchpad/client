import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = makeStyles(theme => ({
  app: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  main: {
    flexGrow: 1
  },
  content: {
    padding: theme.spacing(3)
  },
  routeActive: {
    backgroundColor: theme.palette.secondary.main
  },
  toolbarSpace: theme.mixins.toolbar,
  hidden: {
    visibility: "hidden"
  }
}));

export default styles;
