import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Card, CardActions, CardContent, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
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
  availableCodesStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VendorList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Users = [
    {
      name: "kamal Singh",
      sno: "10000",
    },
    {
      name: "Amit Singh",
      sno: "10000",
    },
    {
      name: "Akash Kumar",
      sno: "10000",
    },
    {
      name: "Pankaj Joshi",
      sno: "10000",
    },
    {
      name: "Ayush Tripathi",
      sno: "10000",
    },
    {
      name: "Amit Singh",
      sno: "10000",
    },
    {
      name: "Akash Kumar",
      sno: "10000",
    },
    {
      name: "Pankaj Joshi",
      sno: "10000",
    },
    {
      name: "Ayush Tripathi",
      sno: "10000",
    },
  ];

  return (
    <div>
      <Typography
        style={{ fontSize: "1.8em" }}
        className={classes.availableCodesStyle}
        onClick={handleClickOpen}
      >
        Vendor List
      </Typography>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              style={{ display: "flex", justifyContent: "center" }}
              variant="h5"
              className={classes.title}
            >
              Vendor List
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              Generate
            </Button> */}
          </Toolbar>
        </AppBar>
        <div
          style={{
            padding: 20,
            height: "100%",
            backgroundColor: "#656565",
          }}
        >
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
                {Users.map((item, index) => (
                  <CardActions disableSpacing key={index}>
                    <Typography
                      className={classes.details}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      {item.name}
                    </Typography>
                    <Typography className={classes.expand} variant="subtitle1">
                      {item.sno}
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
                {Users.map((item, index) => (
                  <CardActions disableSpacing key={index}>
                    <Typography
                      className={classes.details}
                      aria-label="show more"
                      variant="subtitle1"
                    >
                      {item.name}
                    </Typography>
                    <Typography className={classes.expand} variant="subtitle1">
                      {item.sno}
                    </Typography>
                  </CardActions>
                ))}
              </Card>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}
