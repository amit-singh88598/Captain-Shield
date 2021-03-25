import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { regxPrimaryNumber, regxPassword } from "../regular-Expression";
import Cookies from "js-cookies";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useAuth } from "../auth";
import { Alert } from "@material-ui/lab";
import { getProfile } from "../actions/vendor";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    marginTop: 140,
    marginBottom: 97,
    borderRadius: 20,
    padding: 30,
    backgroundColor: theme.palette.primary.light,
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
  logo: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  contentCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

function LogIn(props) {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setAdminData, setVendorData, setTokenData } = useAuth();
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const [error, setError] = useState({
    primaryNumberErr: false,
    passwordErr: false,
  });

  const [isPassVisible, setIsPassVisible] = useState(false);
  const handleChange = async () => {
    if (!(primaryNumber != "" && regxPrimaryNumber.test(primaryNumber))) {
      setError({ primaryNumberErr: true });
    } else if (!(password != "" && regxPassword.test(password))) {
      setError({ passwordErr: true });
    } else {
      login({
        primaryNumber: primaryNumber,
        password,
      });
    }
  };

  const login = async ({ primaryNumber, password }) => {
    setOpen(true);
    const userRes = await axios.post(`${process.env.BASE_URL}/vendors/login`, {
      primaryNumber: primaryNumber,
      password,
    });
    const { user } = userRes.data.data;
    if (userRes != null) {
      Cookies.setItem("auth", user.token, { expires: 7 });
      setTokenData(user.token);

      getProfile((error, result) => {
        if (result.status) {
          setOpen(false);
          if (user.isAdmin) {
            setAdminData(result.data.user);
            if (router.pathname === "/vendor/login") {
              router.replace("/admin/dashboard");
            }
          } else {
            setVendorData(result.data.user);
            if (router.pathname === "/vendor/login") {
              router.replace("/vendor/dashboard");
            }
          }
        } else {
          setOpen(false);
          setLoginError(error);
        }
      });
    } else {
      setOpen(false);

      setLoginError(userRes.data.message);
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <div>
          <Grid>
            <div className={classes.contentCenter}>
              <Grid item xs={12} sm={7} elevation={4}>
                <Card elevation={3} className={classes.card} elevation={2}>
                  <Snackbar
                    open={loginError ? true : false}
                    autoHideDuration={6000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={() => setLoginError(null)}
                  >
                    <Alert severity="error">{loginError && loginError}</Alert>
                  </Snackbar>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/logo.jpeg"
                      className={classes.logo}
                    />
                  </div>
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
                      className={classes.contentCenter}
                    >
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        label="Phone No."
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
                        placeholder="Phone No."
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      className={classes.contentCenter}
                    >
                      <TextField
                        id="password"
                        variant="outlined"
                        required
                        label="Password"
                        InputProps={{
                          className: classes.input,
                        }}
                        onChange={(event) => {
                          setError({ passwordErr: false });
                          setPassword(event.target.value);
                        }}
                        error={error.passwordErr}
                        helperText={
                          error.PasswordErr == true
                            ? "please enter valid Password"
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
                        placeholder="Password"
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      className={classes.contentCenter}
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
                      onClick={() => router.push("/forgetPassword")}
                      style={{
                        fontWeight: "bold",
                        marginLeft: 10,
                        cursor: "pointer",
                      }}
                    >
                      Forgot your password?
                    </a>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      className={classes.contentCenter}
                    >
                      <Box
                        display="flex"
                        flexWrap="wrap"
                        alignContent="flex-start"
                        className={classes.textStyle}
                      >
                        <a
                          onClick={() => router.push("/vendor/register")}
                          style={{ fontWeight: "bold", cursor: "pointer" }}
                        >
                          New Here ? Register !
                        </a>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

//   else {
//     const data = { primaryNumber, password };
//     try {
//       const res = await axios.post(
//         `${process.env.BASE_URL}/vendors/login`,
//         data,
//         {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//             withCredentials: true,
//           },
//         }
//       );
//       if (res && res.data.isAuth) {
//         //to save token in cookies
//         cookies.setItem("auth", res.data.token, { expires: 3 });
//         router.replace("/vendor/dashboard");
//       } else {
//         alert("Something went wrong");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };
