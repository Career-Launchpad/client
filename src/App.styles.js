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
  routeActive: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 300 : 700]
  },
  toolbarSpace: theme.mixins.toolbar
}));

export default styles;
