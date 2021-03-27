import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { getVendors } from "../../actions/vendor";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: 20,
    padding: 10,
  },
  cardStyle: {
    borderRadius: 20,
    padding: 40,
    backgroundColor: theme.palette.secondary.light,
    height: 675,
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  totalCodes: {
    borderStyle: "outset ",
    borderRadius: 15,
    borderTop: 0,
    borderLeft: 0,
    // padding: 5,
    // paddingBottom: 40,
    height: 400,
    // width: "50%",
    // margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const codes = [
  { title: "10" },
  { title: "20" },
  { title: "50" },
  { title: "100" },
  { title: "200" },
  { title: "500" },
  { title: "1000" },
];

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
          <Grid item xs={12} sm={8}>
            <Card className={classes.totalCodes} elevation={2}>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      margin: 20,
                      // marginTop: 20,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Autocomplete
                      id="combo-box-demo"
                      options={profile}
                      getOptionLabel={(item) =>
                        `${item.firstName} ${item.lastName} : ${item.primaryNumber}`
                      }
                      style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          {...params}
                          label="Select Vendor Name"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 20,
                      // marginTop: 20,
                    }}
                  >
                    <Autocomplete
                      id="combo-box-demo"
                      options={codes}
                      getOptionLabel={(option) => option.title}
                      style={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          {...params}
                          label="Select Total No's. Of Codes"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Button variant="contained" color="secondary">
                  Generate
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Card>
      {/* <Card className={classes.cardStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Autocomplete
                id="combo-box-demo"
                options={profile}
                getOptionLabel={(item) =>
                  `${item.firstName} ${item.lastName} : ${item.primaryNumber}`
                }
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Select Vendor Name"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Autocomplete
                id="combo-box-demo"
                options={codes}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Total No's. Of Codes"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </Grid>
        </Grid>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button variant="contained" color="secondary">
            Generate
          </Button>
        </div>
      </Card> */}
    </div>
  );
}
