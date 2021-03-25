import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Card, Grid, TextField } from "@material-ui/core";
import { getVendors } from "../../actions/vendor";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

const top100Films = [
  { title: "10", year: 1994 },
  { title: "20", year: 1972 },
  { title: "50", year: 1974 },
  { title: "100", year: 2008 },
  { title: "200", year: 1957 },
  { title: "500", year: 1993 },
  { title: "1000", year: 1994 },
  { title: "10000", year: 2003 },
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
          <Grid item xs={12} sm={6}>
            <div style={{ float: "right" }}>
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
                    label="Combo box"
                    variant="outlined"
                  />
                )}
              />
            </div>
            {/* <FormControl className={classes.formControl}>
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
            </FormControl> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Combo box" variant="outlined" />
              )}
            />
            {/* <FormControl className={classes.formControl}>
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
            </FormControl> */}
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
