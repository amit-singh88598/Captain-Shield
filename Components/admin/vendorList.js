import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { getVendors } from "../../actions/vendor";

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

export default function GenerateCode() {
  const classes = useStyles();
  const [profile, setProfile] = useState(null);
  useEffect(async () => {
    await getVendors((error, result) => {
      if (error) {
        console.log(error);
      } else {
        setProfile(result.data);
      }
    });
  }, []);

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
              {profile &&
                profile.map((item, index) => (
                  <CardActions disableSpacing key={index}>
                    <Typography
                      className={classes.details}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      {item._id}
                    </Typography>
                    <Typography className={classes.expand} variant="subtitle1">
                      {item.keys.length}
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
              {profile &&
                profile.map((item, index) => (
                  <CardActions disableSpacing key={index}>
                    <Typography
                      className={classes.details}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      {item._id}
                    </Typography>
                    <Typography className={classes.expand} variant="subtitle1">
                      {item.keys.length}
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
