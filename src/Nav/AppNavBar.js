import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Icon from "@material-ui/core/Icon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const AppNavbar = ({ styles, routes, location }) => {
  const match = path => location.pathname === path;
  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      classes={{ paper: styles.drawerPaper }}
    >
      <div className={styles.toolbarSpace} />
      <List>
        {routes.map(route => (
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

export default withRouter(AppNavbar);
