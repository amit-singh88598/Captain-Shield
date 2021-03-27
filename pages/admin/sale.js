import { Grid, makeStyles } from "@material-ui/core";
import Head from "next/head";
import Header from "../../layout/header";
import { AdminProtectedPage } from "../../auth";
import SideBar from "../../Components/admin/sideBar";
import SaleDetails from "../../Components/admin/saleDetails";

const useStyle = makeStyles((theme) => ({
  desktopStyle: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobStyle: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Sale() {
  const classes = useStyle();
  return (
    <div>
      <AdminProtectedPage>
        <div>
          <Head>
            <title>Captain Shield</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          {/*//////////////////////////////////////////////////// desktop View */}

          <div className={classes.desktopStyle}>
            <Grid container>
              <Grid item xs={2} sm={2}>
                <SideBar />
              </Grid>
              <Grid item xs={10} sm={10}>
                <SaleDetails />
              </Grid>
            </Grid>
          </div>

          {/*//////////////////////////////////////////////////      Mobile View  */}

          <div className={classes.mobStyle}>
            <SaleDetails />
          </div>
          {/* <Grid container>
            <Grid item xs={2} sm={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10} sm={10}>
              <SaleDetails />
            </Grid>
          </Grid> */}
        </div>
      </AdminProtectedPage>
    </div>
  );
}
