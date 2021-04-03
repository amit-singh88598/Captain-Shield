import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.light,
    height: "100vh",
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 5,
    width: 700,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  heading: {
    fontSize: 25,
    color: theme.palette.primary.light,
  },
  details: {
    color: theme.palette.primary.light,
  },
  expand: {
    color: theme.palette.primary.light,
    marginLeft: "auto",
  },
}));

export default function SearchDetails() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Typography
          style={{
            margin: 10,
            marginLeft: 20,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "1.8em",
          }}
        >
          Search Details
        </Typography>
        <div className={classes.desktopStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card className={classes.totalCodes} elevation={2}>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Key
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {props.data.streetNumber} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Status
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {capitalize(`${props.data.street}`)} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Activation Date
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {capitalize(`${props.data.landMark}`)} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Expiry Date
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {capitalize(`${props.data.city}`)} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  User Name
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {capitalize(`${props.data.state}`)} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Contact Number
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {props.data.pincode} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Vendor Name
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {props.data.pincode} */}
                </Typography>
              </CardActions>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="subtitle1">
                  Contact Number
                </Typography>
                <Typography
                  className={classes.expand}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                  variant="subtitle1"
                >
                  {/* {props.data.pincode} */}
                </Typography>
              </CardActions>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
