import { Button, Grid } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import DashboardDetails from "../../Components/admin/dashboardDetails";
import SideBar from "../../Components/admin/sideBar";
// import { UserProtectedPage } from "../../auth";
import Header from "../../layout/header";

export default function Dashboard() {
  return (
    <div>
      {/* <UserProtectedPage> */}
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
            <DashboardDetails />
          </Grid>
        </Grid>
      </div>
      {/* </UserProtectedPage> */}
    </div>
  );
}
