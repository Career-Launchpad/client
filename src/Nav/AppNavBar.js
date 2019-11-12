import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { Link } from "found";
import { routes } from "../router";

const AppNavBar = ({ styles, setLoading }) => (
  <Drawer
    className={styles.drawer}
    variant="permanent"
    classes={{ paper: styles.drawerPaper }}
  >
    <div className={styles.toolbarSpace} />
    <List>
      {routes.map(route => (
        <Link key={route.name} to={route.path} className={styles.route} exact>
          {({ href, active, onClick }) => (
            <ListItem
              button
              selected={active}
              href={href}
              onClick={e => {
                setLoading(true);
                onClick(e);
              }}
            >
              <ListItemIcon>
                <Icon>{route.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItem>
          )}
        </Link>
      ))}
    </List>
    <Divider />
  </Drawer>
);

export default AppNavBar;
