import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Routes } from "../utils/routes.js";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  routeActive: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 300 : 700]
  },
  toolbarSpace: theme.mixins.toolbar
}));

const Navbar = () => {
  const styles = useStyles();
  const location = useLocation();
  const match = path => location.pathname === path;
  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      classes={{ paper: styles.drawerPaper }}
    >
      <div className={styles.toolbarSpace} />
      <List>
        {Routes.filter(route => route.name).map(route => (
          <NavLink key={route.name} to={route.path}>
            <ListItem
              button
              className={match(route.path) ? styles.routeActive : ""}
            >
              <ListItemIcon>
                <Icon>{route.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Navbar;
