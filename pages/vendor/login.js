import React from "react";
import Head from "next/head";
import LogIn from "../../Components/login";
import { Container, Grid } from "@material-ui/core";

function Login(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-in | Captain Shield</title>
      </Head>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div style={{ padding: 60, backgroundColor: "#1F1D1D" }}>
            <img src="/logo1.jpg" height="635" width="100%" alt="logo" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LogIn role="user" />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}

export default Login;
