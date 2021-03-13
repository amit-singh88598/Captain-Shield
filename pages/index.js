import { Grid } from "@material-ui/core";
import Head from "next/head";
import Dashboard from "../Components/dashboard";
import SideBar from "../Components/sideBar";
import Header from "../layout/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Captain Shield</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Grid container>
        <Grid item xs={2} sm={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10} sm={10}>
          <Dashboard />
        </Grid>
      </Grid>
    </div>
  );
}
