import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { makeStyles, Tooltip } from "@material-ui/core";
import { AccountCircle, ExitToApp, Home, Settings } from "@material-ui/icons";
import { Router } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
  },
}));

export default function Setting() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        // size="small"
        style={{ marginTop: 5 }}
      >
        <Tooltip disableFocusListener disableTouchListener title="Settings">
          <AccountCircle className={classes.root} size="large" />
        </Tooltip>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        style={{ marginTop: 50 }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <a
            href="/vendor/login"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "flex-start",
            }}
            onClick={() => Router.push("/login")}
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-start",
                padding: 15,
              }}
              fullWidth
            >
              <ExitToApp style={{ marginRight: 10 }} />
              Logout
            </Button>
          </a>
        </div>
      </Menu>
    </div>
  );
}
