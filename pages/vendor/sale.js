import { Button, Grid } from "@material-ui/core";
import Head from "next/head";
import SideBar from "../../Components/sideBar";
import Header from "../../layout/header";
import { useRouter } from "next/router";
import { useAuth } from "../../auth";
import SaleDetails from "../../Components/saleDetails";

export default function Sale() {
  const { isAuthenticatedUser } = useAuth();
  const router = useRouter();
  return (
    <div>
      {isAuthenticatedUser == false ? (
        <div>
          <Button onClick={() => router.push("/login")}>Login first</Button>
        </div>
      ) : (
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
              <SaleDetails />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}
