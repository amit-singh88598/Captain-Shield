import {
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  card: {
    marginTop: 150,
    marginBottom: 170,
    borderRadius: 20,
    padding: 30,
    backgroundColor: theme.palette.secondary.light,
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
      switch (props.role) {
        case "vendor":
          login({
            primaryNumber: primaryNumber,
            userType: "vendor",
            password,
          });
          break;

        default:
          login({
            primaryNumber: primaryNumber,
            userType: "admin",
            password,
          });
          break;
      }
    }
  };

  const login = async ({ primaryNumber, password, userType }) => {
    switch (userType.toLowerCase()) {
      //if type is vendor then run this code of lines
      case "vendor":
        setOpen(true);
        const userRes = await axios.post(
          `${process.env.BASE_URL}/vendors/login`,
          {
            primaryNumber: primaryNumber,
            password,
          }
        );
        if (userRes.data.token) {
          Cookies.setItem(
            "auth",
            { token: userRes.data.token, userType },
            { expires: 7 }
          );

          getProfile((error, result) => {
            if (result.status) {
              setVendorData(result.data);
              setTokenData(result.data.token);
              setOpen(false);
              if (router.pathname === "/vendor/login") {
                router.replace("/vendor/dashboard");
              }
            } else {
              setOpen(false);
              setLoginError(user.message);
            }
          });
        } else {
          setOpen(false);

          setLoginError(userRes.data.message);
        }
        break;

      //if user is admin then run this code of lines
      case "admin":
        setOpen(true);
        const adminRes = await axios.post(
          `${process.env.BASE_URL}/vendors/login`,
          {
            username: primaryNumber,
            password,
          }
        );
        if (adminRes.data.token && adminRes.data.token) {
          Cookies.setItem("adminAuth", adminRes.data.token, { expires: 7 });

          getProfile((error, result) => {
            if (result.status) {
              setOpen(false);
              setAdminData(result.data.data);
              setTokenData(adminRes.data.token);
              if (router.pathname === "/partner/signin") {
                router.push("/partner");
              }
            } else {
              setOpen(false);
              setLoginError(result.data.message);
            }
          });
        } else {
          setOpen(false);
          console.log(adminRes);
          setLoginError(adminRes.data.message);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className={classes.root}>
        <div>
          <Grid>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
                      style={{ display: "flex", justifyContent: "center" }}
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
                      style={{ display: "flex", justifyContent: "center" }}
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
