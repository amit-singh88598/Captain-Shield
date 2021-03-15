import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import jsCookies from "js-cookies";
import React, { useState } from "react";
// import Footer from "../layout/footer";
// import Header from "../layout/header";
import {
  regxFirstName,
  regxLastName,
  regxEmail,
  regxPrimaryNumber,
  regxPassword,
} from "../regular-Expression";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    marginTop: 60,
    marginBottom: 60,
    padding: 30,
    borderRadius: 30,
    backgroundColor: theme.palette.secondary.light,
  },
  title: {
    textAlign: "center",
    fontSize: "2.5em",
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    // color: theme.palette.primary.light,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  btnStyle: {
    fontSize: "1.2em",
  },

  textStyle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },
}));

// Register Page

function Register(props) {
  const classes = useStyles();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  // const [gender, setGender] = React.useState("");

  const [error, setError] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    primaryNumberErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  // const [open, setOpen] = React.useState(false);

  const handleChange = () => {
    if (!(firstName != "" && regxFirstName.test(firstName))) {
      setError({ firstNameErr: true });
    } else if (!(lastName != "" && regxLastName.test(lastName))) {
      setError({ lastNameErr: true });
    } else if (!(email != "" && regxEmail.test(email))) {
      setError({ emailErr: true });
    } else if (
      !(primaryNumber != "" && regxPrimaryNumber.test(primaryNumber))
    ) {
      setError({ primaryNumberErr: true });
    } else if (!(password != "" && regxPassword.test(password))) {
      setError({ passwordErr: true });
    } else if (confirmPassword === "") {
      setError({ confirmPasswordErr: true });
    } else {
      if (password !== confirmPassword) {
        setError({ confirmPasswordErr: true });
      } else {
        const postData = {
          firstName,
          lastName,
          primaryNumber,
          email,
          password,
        };
        console.log(postData);
        userRegister(postData);
      }
    }
  };

  const userRegister = async (data) => {
    try {
      const res = await axios.post(
        "https://captionshield.herokuapp.com/api/users/register",
        data
      );
      if (res && res.data.isAuth) {
        // to save token in cookies
        jsCookies.setItem("captionshield", res.data.token, { expires: 3 });
        router.replace("/");
        // alert("Register successful");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleGender = (event) => {
  //   setGender(event.target.value);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Header /> */}
      <div className={classes.root}>
        <div>
          <Container component="main">
            <Grid container spacing={2}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} sm={7}>
                  <Card className={classes.card} elevation={2}>
                    <Typography className={classes.title} variant="h1">
                      Let's get started !
                    </Typography>
                    <Grid container spacing={2} style={{ marginTop: 20 }}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          className={classes.textFieldStyle}
                          style={{ marginTop: 10 }}
                          onChange={(event) => {
                            setError({ firstNameErr: false });
                            setFirstName(event.target.value);
                          }}
                          error={error.firstNameErr}
                          helperText={
                            error.firstNameErr
                              ? "Please enter valid First Name"
                              : ""
                          }
                          fullWidth
                          placeholder="First Name"
                          // autoFocus
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          className={classes.textFieldStyle}
                          style={{ marginTop: 10 }}
                          onChange={(event) => {
                            setError({ lastNameErr: false });
                            setLastName(event.target.value);
                          }}
                          error={error.lastNameErr}
                          helperText={
                            error.lastNameErr
                              ? "Please enter valid Last Name"
                              : ""
                          }
                          fullWidth
                          placeholder="Last Name"
                          // autoFocus
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          color="primary"
                          onChange={(event) => {
                            setError({ emailErr: false });
                            setEmail(event.target.value);
                          }}
                          error={error.emailErr}
                          helperText={
                            error.emailErr ? "Please enter valid email" : ""
                          }
                          fullWidth
                          type="text"
                          placeholder="Email"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          onChange={(event) => {
                            setError({ primaryNumberErr: false });
                            setPrimaryNumber(event.target.value);
                          }}
                          error={error.primaryNumberErr}
                          helperText={
                            error.primaryNumberErr
                              ? "please enter valid Phone no."
                              : ""
                          }
                          fullWidth
                          placeholder="Phone no."
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          variant="outlined"
                          onChange={(event) => {
                            setError({ passwordErr: false });
                            setPassword(event.target.value);
                          }}
                          error={error.passwordErr}
                          helperText={
                            error.passwordErr == true
                              ? " Password Contains Minimum Six Characters, At Least One Letter And One Number:"
                              : ""
                          }
                          // helperText={
                          //   error.passwordErr ? "please enter valid Password" : ""
                          // }
                          fullWidth
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    isPassVisible
                                      ? setIsPassVisible(false)
                                      : setIsPassVisible(true);
                                  }}
                                >
                                  {isPassVisible ? (
                                    <Visibility fontSize="small" />
                                  ) : (
                                    <VisibilityOff fontSize="small" />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          type={isPassVisible ? "text" : "password"}
                          value={password}
                          id="password"
                          placeholder="Password"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          onChange={(event) => {
                            setError({ confirmPasswordErr: false });
                            setConfirmPassword(event.target.value);
                          }}
                          error={error.confirmPasswordErr}
                          helperText={
                            error.confirmPasswordErr == true
                              ? "Please Match your Password"
                              : ""
                          }
                          // helperText={
                          //   error.confirmPasswordErr
                          //     ? "please enter valid Password"
                          //     : ""
                          // }

                          fullWidth
                          value={confirmPassword}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    isConfirmPassVisible
                                      ? setIsConfirmPassVisible(false)
                                      : setIsConfirmPassVisible(true);
                                  }}
                                >
                                  {isConfirmPassVisible ? (
                                    <Visibility fontSize="small" />
                                  ) : (
                                    <VisibilityOff fontSize="small" />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          type={isConfirmPassVisible ? "text" : "password"}
                          placeholder="Confirm Password"
                        />
                      </Grid>
                      {/* <Grid
                      item
                      xs={12}
                      sm={12}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <FormControl className={classes.formControl} fullWidth>
                        <InputLabel id="demo-controlled-open-select-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-controlled-open-select-label"
                          id="demo-controlled-open-select"
                          open={open}
                          onClose={handleClose}
                          onOpen={handleOpen}
                          value={gender}
                          onChange={handleGender}
                        >
                          <MenuItem value="">
                            <em>Gender</em>
                          </MenuItem>
                          <MenuItem value={10}>Male</MenuItem>
                          <MenuItem value={20}>Female</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid> */}
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="contained"
                          className={classes.btnStyle}
                          size="large"
                          fullWidth
                          color="primary"
                          onClick={handleChange}
                        >
                          Sign Up
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Box
                          display="flex"
                          flexWrap="wrap"
                          alignContent="flex-start"
                          className={classes.textStyle}
                        >
                          <div>
                            <a
                              href="/login"
                              onClick={() => router.push("/login")}
                              style={{ fontWeight: "bold" }}
                            >
                              Already have account ?
                            </a>
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              </div>
            </Grid>
          </Container>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Register;
