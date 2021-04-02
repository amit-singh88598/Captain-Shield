import {
  Avatar,
  Button,
  Card,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Backup } from "@material-ui/icons";
import Head from "next/head";
import { AdminProtectedPage } from "../../auth";
import SideBar from "../../Components/admin/sideBar";
import Header from "../../layout/header";

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
  root: {
    paddingBottom: 85,
    padding: 10,
    height: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    height: 650,
    backgroundColor: theme.palette.secondary.light,
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    display: "none",
  },
  txtStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.grey,
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

export default function Dashboard() {
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
                <div className={classes.root}>
                  <Card className={classes.cardStyle} elevation={0}>
                    <div
                      className={classes.alignCenter}
                      style={{ marginTop: 130 }}
                    >
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="/logo.jpeg"
                            className={classes.large}
                          />
                        </IconButton>

                        <input
                          accept="image/*"
                          className={classes.input}
                          id="icon-button-file"
                          type="file"
                        />
                      </label>
                    </div>
                    <div
                      className={classes.alignCenter}
                      style={{ marginBottom: 20 }}
                    >
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          SELECT FILE
                        </Button>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                      </label>
                    </div>
                    <div
                      className={classes.alignCenter}
                      style={{ marginBottom: 50 }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        className={classes.button}
                        startIcon={<Backup />}
                      >
                        Upload
                      </Button>
                    </div>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </div>

          {/*//////////////////////////////////////////////////      Mobile View  */}

          <div className={classes.mobStyle}>
            <div className={classes.root}>
              <Card className={classes.cardStyle} elevation={0}>
                <div className={classes.alignCenter} style={{ marginTop: 130 }}>
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/logo.jpeg"
                        className={classes.large}
                      />
                    </IconButton>

                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                    />
                  </label>
                </div>
                <div
                  className={classes.alignCenter}
                  style={{ marginBottom: 20 }}
                >
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      SELECT FILE
                    </Button>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                  </label>
                </div>
                <div
                  className={classes.alignCenter}
                  style={{ marginBottom: 50 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.button}
                    startIcon={<Backup />}
                  >
                    Upload
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AdminProtectedPage>
    </div>
  );
}
