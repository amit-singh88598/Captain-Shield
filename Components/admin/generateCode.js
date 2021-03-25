import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { getVendors } from "../../actions/vendor";
// import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: 20,
    paddingRight: 20,
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="grouped-select">
                Select Vendor Name
              </InputLabel>
              <Select defaultValue="" id="grouped-select">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {profile &&
                  profile.map((item, index) => (
                    <div key={index}>
                      <MenuItem value={1}>{item.primaryNumber}</MenuItem>
                    </div>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel fullwidth="true" htmlFor="grouped-select">
                Select Total No.'s Of Codes
              </InputLabel>
              <Select defaultValue="" id="grouped-select">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={4}>100</MenuItem>
                <MenuItem value={4}>200</MenuItem>
                <MenuItem value={4}>500</MenuItem>
                <MenuItem value={4}>1000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
              </Select>
              {/* <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={
                  profile &&
                  profile.map((item) => {
                    item.primaryNumber;
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: "search" }}
                  />
                )}
              /> */}
            </FormControl>
          </Grid>
        </Grid>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <Button variant="contained" color="secondary">
            Generate
          </Button>
        </div>
      </Card>
    </div>
  );
}
