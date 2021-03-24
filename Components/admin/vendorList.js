import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 20,
    paddingRight: 20,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    padding: 40,
    backgroundColor: theme.palette.secondary.light,
    height: 675,
  },
  details: {
    marginLeft: 10,
    color: theme.palette.primary.light,
  },
  heading: {
    fontSize: "1.5em",
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    marginRight: 10,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 5,
    height: 600,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Users = [
  {
    name: "kamal Singh",
    sno: "10000",
  },
  {
    name: "Amit Singh",
    sno: "10000",
  },
  {
    name: "Akash Kumar",
    sno: "10000",
  },
  {
    name: "Pankaj Joshi",
    sno: "10000",
  },
  {
    name: "Ayush Tripathi",
    sno: "10000",
  },
  {
    name: "Amit Singh",
    sno: "10000",
  },
  {
    name: "Akash Kumar",
    sno: "10000",
  },
  {
    name: "Pankaj Joshi",
    sno: "10000",
  },
  {
    name: "Ayush Tripathi",
    sno: "10000",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GenerateCode() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.totalCodes} elevation={2}>
              <CardContent>
                <Typography className={classes.heading} variant="h1">
                  Vendors
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="h6">
                  Name
                </Typography>
                <Typography className={classes.expand} variant="h6">
                  Codes
                </Typography>
              </CardActions>
              {Users.map((item, index) => (
                <CardActions disableSpacing key={index}>
                  <Typography
                    className={classes.details}
                    aria-label="show more"
                    variant="subtitle1"
                  >
                    {item.name}
                  </Typography>
                  <Typography className={classes.expand} variant="subtitle1">
                    {item.sno}
                  </Typography>
                </CardActions>
              ))}
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.totalCodes} elevation={2}>
              <CardContent>
                <Typography className={classes.heading} variant="h1">
                  Vendors
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="h6">
                  Name
                </Typography>
                <Typography className={classes.expand} variant="h6">
                  Codes
                </Typography>
              </CardActions>
              {Users.map((item, index) => (
                <CardActions disableSpacing key={index}>
                  <Typography
                    className={classes.details}
                    aria-label="show more"
                    variant="subtitle1"
                  >
                    {item.name}
                  </Typography>
                  <Typography className={classes.expand} variant="subtitle1">
                    {item.sno}
                  </Typography>
                </CardActions>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
