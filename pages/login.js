import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
// import axios from "axios";
import React, { useState } from "react";
// import { regxEmail, regxPassword } from "../regular-Expression";
// import cookies from "js-cookies";
// import Header from "../layout/header";
// import Footer from "../layout/footer";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    marginTop: 70,
    marginBottom: 70,
    borderRadius: 20,
    padding: 30,
    backgroundColor: theme.palette.secondary.light,
  },
  btnStyle: {
    // backgroundColor: "#ffffff",
    // color: "#ff148a",
    fontSize: "1.2em",
  },
  textStyle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },
  input: {
    color: "#000000",
  },
}));

function Login(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameErr, setUserNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const router = useRouter();
  const handleChange = async () => {
    if (!regxEmail.test(userName)) {
      setUserNameErr(true);
    } else if (!regxPassword.test(password)) {
      setPasswordErr(true);
    } else {
      const data = { email: userName, password };
      try {
        // const res = await axios.post(
        //   "https://talentheight.herokuapp.com/api/users/login",
        //   data
        // );
        // if (res && res.data.isAuth) {
        //   //to save token in cookies
        //   cookies.setItem("talentHeight", res.data.token, { expires: 3 });
        //   router;
        //   router.replace("/");
        // } else {
        //   alert("Something went wrong");
        // }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <div className={classes.root}>
        <div>
          <Container component="main">
            <Grid spacing={2}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} sm={7} elevation={4}>
                  <Card elevation={3} className={classes.card} elevation={2}>
                    <Typography
                      style={{
                        textAlign: "center",
                        fontSize: "2.5em",
                        display: "flex",
                        marginTop: 20,
                        justifyContent: "center",
                      }}
                      variant="h1"
                    >
                      Welcome back !
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
                          // InputProps={{
                          //   className: classes.input,
                          // }}
                          label="User Name / Email"
                          // variant="filled"
                          required
                          // color="secondary"
                          style={{ marginTop: 10 }}
                          onChange={(event) => {
                            setUserNameErr(false);
                            setUserName(event.target.value);
                          }}
                          error={userNameErr}
                          helperText={
                            userNameErr ? "Please enter valid User Name" : ""
                          }
                          fullWidth
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
                          id="password"
                          variant="outlined"
                          required
                          label="Password"
                          // InputProps={{
                          //   className: classes.input,
                          // }}
                          // color="secondary"
                          InputProps={{
                            className: classes.input,
                          }}
                          onChange={(event) => {
                            setPasswordErr(false);
                            setPassword(event.target.value);
                          }}
                          error={passwordErr}
                          helperText={
                            passwordErr ? "please enter valid Password" : ""
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
                          placeholder="Password"
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
                          color="primary"
                          className={classes.btnStyle}
                          size="medium"
                          fullWidth
                          onClick={handleChange}
                        >
                          Log in
                        </Button>
                      </Grid>
                      <a
                        href="/forgetPassword"
                        onClick={() => router.push("/forgetPassword")}
                        style={{ fontWeight: "bold", marginLeft: 10 }}
                      >
                        Forgot your password?
                      </a>
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
                          <div style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>
                              New Here ?{" "}
                            </Typography>
                            <a
                              href="/register"
                              onClick={() => router.push("/register")}
                              style={{ fontWeight: "bold" }}
                            >
                              Register !
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

export default Login;
