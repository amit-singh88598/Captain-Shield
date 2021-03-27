import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { getUsersProfile } from "../../actions/vendor";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 20,
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    paddingBottom: 20,
    marginBottom: 20,
    // padding: 40,
    backgroundColor: theme.palette.secondary.light,
    height: 670,
    // height: "100%",
  },
  details: {
    color: theme.palette.primary.light,
    fontWeight: 500,
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
    marginRight: 50,
    fontWeight: 500,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 5,
    paddingBottom: 20,
    width: 800,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  scroll: {
    overflowY: "scroll",
    height: 540,
  },
}));

export default function UsersRecords() {
  const classes = useStyles();
  const [profile, setProfile] = useState(null);
  useEffect(async () => {
    await getUsersProfile((error, result) => {
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
        <Typography
          style={{
            margin: 10,
            marginLeft: 20,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "1.8em",
          }}
        >
          Users Record
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card className={classes.totalCodes} elevation={2}>
            <div className={classes.scroll} id="scroller">
              <CardActions disableSpacing>
                <Typography className={classes.details} variant="h5">
                  Name
                </Typography>
                <Typography
                  style={{ marginLeft: 280 }}
                  className={classes.details}
                  variant="h5"
                >
                  Number
                </Typography>
                <Typography className={classes.expand} variant="h5">
                  Expiry Date
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
                          {`${item._user.name}`}
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
                          {item._user.primaryNumber}
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
                          {item.expiryDate}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardActions>
                ))}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
