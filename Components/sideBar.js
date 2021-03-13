import {
  Avatar,
  Button,
  Card,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Dashboard, Description, Receipt, Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: 1040,
  },
  detail: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginTop: 15,
  },
  listItem: {
    color: theme.palette.primary.light,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.detail}>
        <Avatar alt="Remy Sharp" src="avatar3.png" className={classes.large} />
      </div>
      <Typography
        style={{
          marginTop: 20,
        }}
        className={classes.detail}
      >
        Kamal Singh
      </Typography>
      <Typography className={classes.detail} variant="body2">
        Sub Vendor
      </Typography>
      <div style={{ marginTop: 20 }} className={classes.detail}>
        <List className={classes.listItem}>
          <ListItem button>
            <ListItemIcon>
              <Dashboard className={classes.listItem} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Description className={classes.listItem} />
            </ListItemIcon>
            <ListItemText primary="Purchase" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Receipt className={classes.listItem} />
            </ListItemIcon>
            <ListItemText primary="Sale" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings className={classes.listItem} />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
        </List>
      </div>
      <div
        style={{ marginTop: 100, paddingBottom: 80 }}
        className={classes.detail}
      >
        {/* <Card style={{ width: 80 }}> */}
        <Avatar alt="Remy Sharp" src="avatar3.png" className={classes.large} />
        {/* </Card> */}
      </div>
    </div>
  );
}

export default SideBar;
