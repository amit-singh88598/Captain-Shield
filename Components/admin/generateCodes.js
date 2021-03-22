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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GenerateCodes() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography
        style={{ fontSize: "1.8em" }}
        className={classes.availableCodesStyle}
        onClick={handleClickOpen}
      >
        Generate Codes
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
            <Typography variant="h6" className={classes.title}>
              Generate Codes
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Generate
            </Button>
          </Toolbar>
        </AppBar>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 100,
            backgroundColor: "#edeff2",
            height: "100%",
          }}
        >
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
        </div>
      </Dialog>
    </div>
  );
}
