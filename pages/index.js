import { Card, Grid } from "@material-ui/core";
import Head from "next/head";
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Card>xs=12 sm=6</Card>
        </Grid>
      </Grid>
    </div>
  );
}
