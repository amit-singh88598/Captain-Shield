import { Grid } from "@material-ui/core";
import Head from "next/head";
import { AdminProtectedPage } from "../../auth";
import SideBar from "../../Components/admin/sideBar";
import Header from "../../layout/header";
import VendorsList from "../../Components/admin/vendorList";

export default function Vendors() {
  return (
    <div>
      {/* <AdminProtectedPage> */}
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
            <VendorsList />
          </Grid>
        </Grid>
      </div>
      {/* </AdminProtectedPage> */}
    </div>
  );
}
