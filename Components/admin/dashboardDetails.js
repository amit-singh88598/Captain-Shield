import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Gradient } from "react-gradient";
import { getCodes } from "../../actions/vendor";
import MyChart from "../myChart";
import GenerateCodes from "../admin/generateCodes";
import VendorList from "./vendorList";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: 45,
    paddingRight: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    height: 650,
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
    cursor: "pointer",
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

  // Scroller Style

  scroll: {
    overflowY: "scroll",
    height: 650,
  },
}));

const gradients = [
  ["#363131", "#363131"],
  ["#363131", "#bda713"],
];

// Dashboard

export default function DashboardDetails(props) {
  const [codes, setCodes] = useState([]);
  const [codesLength, setCodesLength] = useState(-1);
  useEffect(async () => {
    await getCodes("605065bcc26a4d23baac1be7", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        const temp = [];
        setCodesLength(result.length);
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
          <div className={classes.scroll} id="scroller">
            <Typography
              style={{
                margin: 10,
                marginLeft: 20,
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "1.8em",
              }}
            >
              Dashboard
            </Typography>
            <div>
              <Grid container>
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
                      ₹ 00
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
                        ₹ 00
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
                  {/*///////////////////////////////////////////////////////////////   Generate Codes Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                  >
                    <GenerateCodes />
                  </Gradient>
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/*///////////////////////////////////////////////////////////////   Vendors List Card */}

                  <Gradient
                    className={classes.purchaseCard}
                    gradients={gradients}
                    property="background"
                    duration={3000}
                    angle="45deg"
                  >
                    <VendorList />
                  </Gradient>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
