import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Gradient } from "react-gradient";
import { getCodes } from "../actions/vendor";
import MyChart from "./myChart";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 20,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    height: 1000,
    backgroundColor: theme.palette.secondary.light,
  },
  purchaseCard: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  saleCard: {
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  availableCodesCard: {
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  priceTag: {
    color: theme.palette.primary.light,
  },

  ////

  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    padding: 20,
    height: 370,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  availableCodesStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  listStyle: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
  details: {
    marginLeft: 30,
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
    marginRight: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
}));

const gradients = [
  ["#363131", "#363131"],
  ["#363131", "#bda713"],
];

// Dashboard

export default function DashboardDetails(props) {
  const [codes, setCodes] = useState([]);
  useEffect(async () => {
    await getCodes("605065bcc26a4d23baac1be7", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        const temp = [];
        for (let i = 0; i < 5; i++) {
          temp.push(result[i]);
        }
        setCodes(temp);
      }
    });
  }, []);
  const classes = useStyle();

  return (
    <div>
      <div className={classes.root}>
        <Card className={classes.cardStyle}>
          <Typography
            style={{
              margin: 30,
              marginLeft: 40,
              color: "#ffffff",
              fontWeight: 600,
            }}
            variant="h5"
          >
            Dashboard
          </Typography>
          <div>
            <Grid container>
              <Grid item xs={12} sm={4}>
                {/*////////////////////////////////////////////////////////         Purchase Card */}

                <Gradient
                  className={classes.purchaseCard}
                  gradients={gradients}
                  property="background"
                  transitionType="parallel"
                  duration={3000}
                  angle="45deg"
                >
                  <div style={{ display: "flex" }}>
                    <Avatar alt="Remy Sharp" src="/rupee6.jpg" />

                    <Typography
                      style={{
                        float: "right",
                        marginLeft: "auto",
                        fontWeight: 530,
                        fontSize: "1.6em",
                      }}
                      className={classes.priceTag}
                    >
                      Purchase
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: 20,
                      fontWeight: 530,
                    }}
                    className={classes.priceTag}
                  >
                    ₹ 15,000
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="body1"
                      style={{
                        marginTop: 10,
                        fontWeight: 400,
                      }}
                      className={classes.priceTag}
                    >
                      ₹ 15,000
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginLeft: 10,
                        marginTop: 12,
                        fontWeight: 500,
                      }}
                      className={classes.priceTag}
                    >
                      Total Purchase
                    </Typography>
                  </div>
                </Gradient>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/*///////////////////////////////////////////////////////////////   Sale Card */}

                <Gradient
                  className={classes.purchaseCard}
                  gradients={gradients}
                  property="background"
                  duration={3000}
                  angle="45deg"
                >
                  <div style={{ display: "flex" }}>
                    <Avatar alt="Remy Sharp" src="/rupee6.jpg" />

                    <Typography
                      style={{
                        float: "right",
                        marginLeft: "auto",
                        fontWeight: 530,
                        fontSize: "1.6em",
                      }}
                      className={classes.priceTag}
                    >
                      Sale
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: 20,
                      fontWeight: 530,
                    }}
                    className={classes.priceTag}
                  >
                    ₹ 15,000
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="body1"
                      style={{
                        marginTop: 10,
                        fontWeight: 400,
                      }}
                      className={classes.priceTag}
                    >
                      ₹ 15,000
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginLeft: 10,
                        marginTop: 12,
                        fontWeight: 500,
                      }}
                      className={classes.priceTag}
                    >
                      Total Sale
                    </Typography>
                  </div>
                </Gradient>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/*///////////////////////////////////////////////////////////////   Available Codes Card */}

                <Gradient
                  className={classes.purchaseCard}
                  gradients={gradients}
                  property="background"
                  duration={3000}
                  angle="45deg"
                >
                  <Typography
                    style={{ fontSize: "1.8em" }}
                    className={classes.availableCodesStyle}
                  >
                    Available Codes
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{ marginTop: 25 }}
                    className={classes.availableCodesStyle}
                  >
                    340
                  </Typography>
                </Gradient>
              </Grid>
            </Grid>
          </div>

          <div style={{ marginLeft: 20 }}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <MyChart />
              </Grid>
              <Grid item xs={12} sm={4}>
                {/*/////////////////////////////////////////////////////        Top 5 Codes */}
                <Card className={classes.totalCodes} elevation={2}>
                  <CardContent>
                    <Typography className={classes.heading} variant="h1">
                      Top 5 Codes
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Typography className={classes.details} variant="subtitle1">
                      S No.
                    </Typography>
                    <Typography className={classes.expand} variant="subtitle1">
                      Codes
                    </Typography>
                  </CardActions>
                  {codes.map((item, index) => (
                    <CardActions disableSpacing key={index}>
                      <Typography
                        className={classes.details}
                        variant="subtitle1"
                      >
                        {index + 1}
                      </Typography>
                      <Typography
                        className={classes.expand}
                        aria-label="show more"
                        variant="subtitle1"
                      >
                        {item.activationCode}
                      </Typography>
                    </CardActions>
                  ))}
                  {/* <CardActions disableSpacing>
                    <Typography className={classes.details} variant="subtitle1">
                      2
                    </Typography>
                    <Typography
                      className={classes.expand}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      10002
                    </Typography>
                  </CardActions>
                  <CardActions disableSpacing>
                    <Typography className={classes.details} variant="subtitle1">
                      3
                    </Typography>
                    <Typography
                      className={classes.expand}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      10003
                    </Typography>
                  </CardActions>
                  <CardActions disableSpacing>
                    <Typography className={classes.details} variant="subtitle1">
                      4
                    </Typography>
                    <Typography
                      className={classes.expand}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      10004
                    </Typography>
                  </CardActions>
                  <CardActions disableSpacing>
                    <Typography className={classes.details} variant="subtitle1">
                      5
                    </Typography>
                    <Typography
                      className={classes.expand}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      10005
                    </Typography>
                  </CardActions> */}
                </Card>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    </div>
  );
}
