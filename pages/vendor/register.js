import React from "react";
import Head from "next/head";
import VendorRegister from "../../Components/register";
import { Grid } from "@material-ui/core";

function UserSignup(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-up | Captain Shield</title>
      </Head>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div style={{ padding: 60, backgroundColor: "#1F1D1D" }}>
            <img src="/logo1.png" height="640" width="100%" alt="logo" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <VendorRegister />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserSignup;
