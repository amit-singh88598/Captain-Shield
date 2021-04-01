import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, Chip, Grid, Typography } from "@material-ui/core";
import { getPurchaseCodes } from "../../actions/vendor";
import capitalize from "../../Components/capitalize";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 20,
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.light,
    height: 675,
  },

  // Desktop Style

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

  desktopStyle: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  // Mobile Style

  mobStyle: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobCardStyle: {
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: theme.palette.secondary.main,
  },

  //  Scroll bar

  scroll: {
    overflowY: "scroll",
    height: 540,
  },
}));

export default function VendorsList() {
  const classes = useStyles();
  // const [codes, setCodes] = useState(null);
  // useEffect(async () => {
  //   await getPurchaseCodes((error, result) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       setCodes(result.data);
  //     }
  //   });
  // }, []);

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
          Vendor List
        </Typography>

        {/* //////////////////////////////////////////////////////////         Desktop Card  */}

        <div className={classes.desktopStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card className={classes.totalCodes} elevation={2}>
              <div className={classes.scroll} id="scroller">
                <CardActions disableSpacing>
                  <Typography style={{ color: "#ffffff" }} variant="h6">
                    Date
                  </Typography>

                  <Typography className={classes.expand} variant="h6">
                    Codes
                  </Typography>
                </CardActions>
                {/* {codes &&
                  codes.map((item, index) => ( */}
                <CardActions disableSpacing>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        className={classes.details}
                        aria-label="show more"
                        variant="subtitle1"
                        color="primary"
                      ></Typography>
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
                        {/* {item.keys.length} */}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardActions>
                {/* ))} */}
              </div>
            </Card>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////           Mobile Card */}

        <div className={classes.mobStyle}>
          {/* {codes &&
            codes.map((item, index) => ( */}
          <Card className={classes.mobCardStyle}>
            {/* <div style={{ display: "flex" }}> */}
            <Typography style={{ marginRight: 10, color: "#ffffff" }}>
              bdagsvdha
              {/* {capitalize(`${item.firstName} ${item.lastName}`)} */}
            </Typography>
            {/* <Chip
                    variant="outlined"
                    color="primary"
                    style={{
                      cursor: "pointer",
                      marginLeft: "auto",
                      paddingLeft: 10,
                      paddingRight: 10,
                      color: "#ffffff",
                    }}
                    size="small"
                    label={item.keys.length}
                  /> */}
            {/* </div> */}
            <Typography style={{ color: "#ffffff" }} variant="subtitle1">
              jasdbh
              {/* {item.primaryNumber} */}
            </Typography>
          </Card>
          {/* ))} */}
        </div>
      </Card>
    </div>
  );
}
