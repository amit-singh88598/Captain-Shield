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
import {
  regxFirstName,
  regxLastName,
  regxEmail,
  regxPrimaryNumber,
  regxPassword,
  regxSecondaryNumber,
} from "../regular-Expression.js";
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

function VendorRegister(props) {
  const classes = useStyles();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);

  const [error, setError] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    primaryNumberErr: false,
    secondaryNumberErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

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
    } else if (
      !(secondaryNumber != "" && regxSecondaryNumber.test(secondaryNumber))
    ) {
      setError({ secondaryNumberErr: true });
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
          secondaryNumber,
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
        `${process.env.BASE_URL}/users/register`,
        data,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            withCredentials: true,
            mode: "no-cors",
          },
        }
      );
      if (res && res.data.isAuth) {
        // to save token in cookies
        jsCookies.setItem("auth", res.data.token, { expires: 3 });
        router.replace("/vendor/dashboard");
        // alert("Register successful");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
                          id="outlined-basic"
                          variant="outlined"
                          onChange={(event) => {
                            setError({ secondaryNumberErr: false });
                            setSecondaryNumber(event.target.value);
                          }}
                          error={error.secondaryNumberErr}
                          helperText={
                            error.secondaryNumberErr
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
                              onClick={() => router.push("/vendor/login")}
                              style={{ fontWeight: "bold", cursor: "pointer" }}
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
    </div>
  );
}

export default VendorRegister;
