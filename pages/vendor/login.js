import React from "react";
import Head from "next/head";
import LogIn from "../../Components/login";
import { Container } from "@material-ui/core";

function Login(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-in | Doorest</title>
      </Head>
      <div>
        <LogIn role="user" />
      </div>
    </div>
  );
}

export default Login;
