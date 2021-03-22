import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Container } from "@material-ui/core";

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
            marginTop: 100,
            padding: 100,
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
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
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
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
          {/* </Container> */}
        </div>
      </Dialog>
    </div>
  );
}

// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import MuiDialogTitle from "@material-ui/core/DialogTitle";
// import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";
// import Typography from "@material-ui/core/Typography";
// import { Grid } from "@material-ui/core";
// import { Gradient } from "@material-ui/icons";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";

// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });

// const useStyle = makeStyles((theme) => ({
//   purchaseCard: {
//     borderStyle: "outset ",
//     borderRadius: 15,
//     borderTop: 0,
//     borderLeft: 0,
//     padding: 20,
//     height: 180,
//     margin: 20,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   availableCodesStyle: {
//     display: "flex",
//     justifyContent: "center",
//     color: theme.palette.primary.light,
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

// const gradients = [
//   ["#363131", "#363131"],
//   ["#363131", "#bda713"],
// ];

// export default function GenerateCodes() {
//   const classes = useStyle();
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Typography
//         style={{ fontSize: "1.8em" }}
//         className={classes.availableCodesStyle}
//         onClick={handleClickOpen}
//       >
//         Generate Codes
//       </Typography>
//       <Dialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Generate Codes
//         </DialogTitle>
//         <div>
//           <FormControl className={classes.formControl}>
//             <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
//             <Select native defaultValue="" id="grouped-native-select">
//               <option aria-label="None" value="" />
//               <optgroup label="Category 1">
//                 <option value={1}>Option 1</option>
//                 <option value={2}>Option 2</option>
//               </optgroup>
//               <optgroup label="Category 2">
//                 <option value={3}>Option 3</option>
//                 <option value={4}>Option 4</option>
//               </optgroup>
//             </Select>
//           </FormControl>
//           <FormControl className={classes.formControl}>
//             <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
//             <Select defaultValue="" id="grouped-select">
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <ListSubheader>Category 1</ListSubheader>
//               <MenuItem value={1}>Option 1</MenuItem>
//               <MenuItem value={2}>Option 2</MenuItem>
//               <ListSubheader>Category 2</ListSubheader>
//               <MenuItem value={3}>Option 3</MenuItem>
//               <MenuItem value={4}>Option 4</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//       </Dialog>
//     </div>
//   );
// }
