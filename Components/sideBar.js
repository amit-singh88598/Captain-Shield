import {
  Avatar,
  Button,
  Card,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Dashboard, Description, Receipt, Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginTop: 15,
  },
  vendorDetail: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  listItem: {
    color: theme.palette.primary.light,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.avatar}>
        <Avatar alt="Remy Sharp" src="avatar3.png" className={classes.large} />
      </div>
      <Typography
        style={{
          marginTop: 20,
        }}
        className={classes.vendorDetail}
      >
        Kamal Singh
      </Typography>
      <Typography className={classes.vendorDetail} variant="body2">
        Sub Vendor
      </Typography>
      <div style={{ marginTop: 20, paddingBottom: 300 }}>
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
    </div>
  );
}

export default SideBar;
