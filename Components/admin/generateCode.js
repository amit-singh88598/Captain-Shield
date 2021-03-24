import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Card, Grid } from "@material-ui/core";

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

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel fullWidth htmlFor="grouped-select">
                Select Vendor Name
              </InputLabel>
              <Select defaultValue="" id="grouped-select">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>kamal Singh</MenuItem>
                <MenuItem value={2}>Amit Singh</MenuItem>
                <MenuItem value={3}>Akash Kumar</MenuItem>
                <MenuItem value={4}>Pankaj Joshi</MenuItem>
                <MenuItem value={1}>Ayush Tripathi</MenuItem>
                <MenuItem value={1}>kamal Singh</MenuItem>
                <MenuItem value={2}>Amit Singh</MenuItem>
                <MenuItem value={3}>Akash Kumar</MenuItem>
                <MenuItem value={4}>Pankaj Joshi</MenuItem>
                <MenuItem value={1}>Ayush Tripathi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel fullWidth htmlFor="grouped-select">
                Select Total No.'s Of Codes
              </InputLabel>
              <Select defaultValue="" id="grouped-select">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
                <MenuItem value={4}>10000</MenuItem>
              </Select>
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
