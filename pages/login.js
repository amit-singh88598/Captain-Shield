import React from "react";
import Head from "next/head";
import LogIn from "../Components/login";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  // root: {
  //   backgroundImage: 'url("/login.jpg")',
  //   // height: "100%",
  //   minHeight: "100%",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  // },
  root: {
    height: 760,
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundImage: 'url("/login.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: 750,
      backgroundImage: 'url("/login1.jpg")',
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
    },
  },
}));

function Login(props) {
  const classes = useStyle();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-in | Captain Shield</title>
      </Head>
      <div className={classes.root}>
        <LogIn role="user" />
      </div>
    </div>
  );
}

export default Login;
// import React from "react";
// import Head from "next/head";
// import LogIn from "../Components/login";
// import { makeStyles } from "@material-ui/core";

// const useStyle = makeStyles((theme) => ({
//   root: {
//     height: 760,
//     display: "flex",
//     justifyContent: "center",
//     backgroundImage: 'url("/login.jpg")',
//     backgroundSize: "100%",
//     backgroundRepeat: "no-repeat",
//     [theme.breakpoints.down("sm")]: {
//       height: 750,
//       backgroundImage: 'url("/login1.jpg")',
//       backgroundSize: "100%",
//       backgroundRepeat: "no-repeat",
//     },
//   },
// }));

// function Login(props) {
//   const classes = useStyle();
//   return (
//     <div>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>User Sign-in | Captain Shield</title>
//       </Head>
//       <div className={classes.root}>
//         <LogIn role="user" />
//       </div>
//     </div>
//   );
// }

// export default Login;
