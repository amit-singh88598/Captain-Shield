import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    paddingBottom: 40,
    // height: 600,
    width: 700,
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card className={classes.totalCodes} elevation={2}>
            <CardContent>
              <Typography className={classes.heading} variant="h1">
                Vendors
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography style={{ color: "#ffffff" }} variant="h6">
                Name
              </Typography>
              <Typography
                style={{ marginLeft: 250 }}
                className={classes.details}
                variant="h6"
              >
                Number
              </Typography>
              <Typography className={classes.expand} variant="h6">
                Codes
              </Typography>
            </CardActions>
            {profile &&
              profile.map((item, index) => (
                <CardActions disableSpacing key={index}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        className={classes.details}
                        aria-label="show more"
                        variant="subtitle1"
                      >
                        {`${item.firstName} ${item.lastName}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        className={classes.details}
                        aria-label="show more"
                        variant="subtitle1"
                        style={{
                          marginLeft: "auto",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {item.primaryNumber}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        className={classes.expand}
                        variant="subtitle1"
                        style={{
                          float: "right",
                          marginRight: 20,
                        }}
                      >
                        {item.keys.length}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardActions>
              ))}
          </Card>
        </div>
      </Card>
    </div>
  );
}
