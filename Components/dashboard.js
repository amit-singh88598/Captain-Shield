import {
  Avatar,
  Card,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Drafts, Inbox, MoreVert } from "@material-ui/icons";
import React from "react";
import { Gradient } from "react-gradient";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 20,
    backgroundColor: theme.palette.primary.main,
  },
  cardStyle: {
    borderRadius: 20,
    height: 1000,
    backgroundColor: theme.palette.secondary.light,
  },
  purchaseCard: {
    borderStyle: "groove none ",
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  saleCard: {
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  availableCodesCard: {
    borderRadius: 15,
    padding: 20,
    height: 180,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  //   moreStyle: {
  //     flexGrow: 1,
  //     marginLeft: "auto",
  //     justifyContent: "flexEnd",
  //     justifyContent: "right",
  //     float: "right",
  //     marginTop: -50,
  //     color: theme.palette.primary.light,
  //   },
  priceTag: {
    color: theme.palette.primary.light,
  },

  ////

  totalCodes: {
    // transitionProperty: "sliding",
    background:
      "linear-gradient(45deg, rgba(#707CFF,1) 0%, rgba(#FA81E8,1) 100%)",
    boxShadow: "0 5px rgba(#FA81E8,.3)",
    borderStyle: "none ridge ",
    borderRadius: 15,
    padding: 20,
    height: 370,
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
  },
  codesStyle: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.primary.light,
  },
  listStyle: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
}));

const gradients = [
  ["#363131", "#bda713"],
  ["#363131", "#363131"],
];

const Lists = [
  {
    sno: "S No.",
    codes: "Codes",
  },
  {
    sno: "1",
    codes: "100001",
  },
  {
    sno: "2",
    codes: "100002",
  },
  {
    sno: "3",
    codes: "100003",
  },
  {
    sno: "4",
    codes: "100004",
  },
  {
    sno: "5",
    codes: "100005",
  },
];

// Dashboard

function Dashboard(props) {
  const classes = useStyle();

  return (
    <div>
      <Gradient
        gradients={gradients} // required
        property="background"
        duration={9000}
        angle="45deg"
      />
      <div className={classes.root}>
        <Card className={classes.cardStyle}>
          <Typography
            style={{
              margin: 30,
              marginLeft: 40,
              color: "#ffffff",
              fontWeight: 600,
            }}
            variant="h5"
          >
            Dashboard
          </Typography>
          <div>
            <Grid container>
              <Grid item xs={12} sm={4}>
                {/*////////////////////////////////////////////////////////         Purchase Card */}

                <Gradient
                  className={classes.purchaseCard}
                  gradients={gradients} // required
                  property="background"
                  duration={3000}
                  angle="45deg"
                >
                  <Avatar alt="Remy Sharp" src="rupee6.jpg" />
                  {/* <IconButton className={classes.moreStyle}>
                    <MoreVert />
                  </IconButton> */}
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: 20,
                      fontWeight: 530,
                    }}
                    className={classes.priceTag}
                  >
                    ₹ 5000
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="body1"
                      style={{
                        marginTop: 10,
                        fontWeight: 400,
                      }}
                      className={classes.priceTag}
                    >
                      ₹ 15,000
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginLeft: 10,
                        marginTop: 12,
                        fontWeight: 500,
                      }}
                      className={classes.priceTag}
                    >
                      Total
                    </Typography>
                  </div>
                </Gradient>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/*///////////////////////////////////////////////////////////////   Sale Card */}

                <Card className={classes.purchaseCard}>
                  <Avatar alt="Remy Sharp" src="rupee6.jpg" />
                  {/* <IconButton className={classes.moreStyle}>
                    <MoreVert />
                  </IconButton> */}
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: 20,
                      fontWeight: 530,
                    }}
                    className={classes.priceTag}
                  >
                    ₹ 5000
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="body1"
                      style={{
                        marginTop: 10,
                        fontWeight: 400,
                      }}
                      className={classes.priceTag}
                    >
                      ₹ 15,000
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        marginLeft: 10,
                        marginTop: 12,
                        fontWeight: 500,
                      }}
                      className={classes.priceTag}
                    >
                      Total
                    </Typography>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                {/*///////////////////////////////////////////////////////////////   Available Codes Card */}

                <Card className={classes.purchaseCard}>
                  <Typography variant="h5" className={classes.codesStyle}>
                    Available Codes
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{ marginTop: 25 }}
                    className={classes.codesStyle}
                  >
                    340
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </div>

          <div style={{ marginLeft: 20 }}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                {/* <Card className={classes.purchaseCard}></Card> */}
              </Grid>
              <Grid item xs={12} sm={4}>
                {/*/////////////////////////////////////////////////////        Total Codes */}
                <Card className={classes.totalCodes}>
                  <Typography variant="h5" className={classes.codesStyle}>
                    Top 10 Codes
                  </Typography>

                  {/*//////////////////////////////////////////////////          List Of Available Codes */}
                  {Lists.map((item, index) => (
                    <List
                      className={classes.listStyle}
                      component="nav"
                      aria-label="available codes"
                      key={index}
                    >
                      <Typography>{item.sno}</Typography>
                      <div
                        style={{
                          marginTop: -25,
                          float: "right",
                        }}
                      >
                        <Typography>{item.codes}</Typography>
                      </div>
                    </List>
                  ))}
                </Card>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;

// import {
//   Avatar,
//   Card,
//   Grid,
//   List,
//   makeStyles,
//   Typography,
// } from "@material-ui/core";
// import { Drafts, Inbox, MoreVert } from "@material-ui/icons";

// import { Gradient } from "react-gradient";
// import React from "react";

// const useStyle = makeStyles((theme) => ({
//   root: {
//     padding: 20,
//     backgroundColor: theme.palette.primary.main,
//   },
//   cardStyle: {
//     borderRadius: 20,
//     height: 1000,
//     backgroundColor: theme.palette.secondary.light,
//   },
//   purchaseCard: {
//     borderStyle: "groove none ",
//     borderRadius: 15,
//     padding: 20,
//     height: 180,
//     margin: 20,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   saleCard: {
//     borderRadius: 15,
//     padding: 20,
//     height: 180,
//     margin: 20,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   availableCodesCard: {
//     borderRadius: 15,
//     padding: 20,
//     height: 180,
//     margin: 20,
//     backgroundColor: theme.palette.secondary.main,
//   },
//   //   moreStyle: {
//   //     flexGrow: 1,
//   //     marginLeft: "auto",
//   //     justifyContent: "flexEnd",
//   //     justifyContent: "right",
//   //     float: "right",
//   //     marginTop: -50,
//   //     color: theme.palette.primary.light,
//   //   },
//   priceTag: {
//     color: theme.palette.primary.light,
//   },

//   ////

//   totalCodes: {
//     boxShadow: "0 5px rgba(#FA81E8,.3)",
//     borderStyle: "none ridge ",
//     borderRadius: 15,
//     padding: 20,
//     height: 370,
//     margin: 20,
//     // backgroundColor: theme.palette.secondary.main,
//   },
//   codesStyle: {
//     display: "flex",
//     justifyContent: "center",
//     color: theme.palette.primary.light,
//   },
//   listStyle: {
//     marginTop: 10,
//     marginRight: 30,
//     marginLeft: 30,
//     backgroundColor: theme.palette.secondary.main,
//     color: theme.palette.primary.light,
//   },
// }));

// const gradients = [
//   ["#bd19d6", "#ea7d10"],
//   ["#ff2121", "#25c668"],
// ];

// const Lists = [
//   {
//     sno: "S No.",
//     codes: "Codes",
//   },
//   {
//     sno: "1",
//     codes: "100001",
//   },
//   {
//     sno: "2",
//     codes: "100002",
//   },
//   {
//     sno: "3",
//     codes: "100003",
//   },
//   {
//     sno: "4",
//     codes: "100004",
//   },
//   {
//     sno: "5",
//     codes: "100005",
//   },
// ];

// // Dashboard

// function Dashboard(props) {
//   const classes = useStyle();

//   return (
//     <div>
//       <Gradient
//         gradients={gradients} // required
//         property="background"
//         duration={9000}
//         angle="45deg"
//       />
//       <div className={classes.root}>
//         <Card className={classes.cardStyle}>
//           <Typography
//             style={{
//               margin: 30,
//               marginLeft: 40,
//               color: "#ffffff",
//               fontWeight: 600,
//             }}
//             variant="h5"
//           >
//             Dashboard
//           </Typography>
//           <div>
//             <Grid container>
//               <Grid item xs={12} sm={4}>
//                 {/*////////////////////////////////////////////////////////         Purchase Card */}

//                 <Card className={classes.purchaseCard}>
//                   <Avatar alt="Remy Sharp" src="rupee6.jpg" />
//                   {/* <IconButton className={classes.moreStyle}>
//                     <MoreVert />
//                   </IconButton> */}
//                   <Typography
//                     variant="h5"
//                     style={{
//                       marginTop: 20,
//                       fontWeight: 530,
//                     }}
//                     className={classes.priceTag}
//                   >
//                     ₹ 5000
//                   </Typography>
//                   <div style={{ display: "flex" }}>
//                     <Typography
//                       variant="body1"
//                       style={{
//                         marginTop: 10,
//                         fontWeight: 400,
//                       }}
//                       className={classes.priceTag}
//                     >
//                       ₹ 15,000
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       style={{
//                         marginLeft: 10,
//                         marginTop: 12,
//                         fontWeight: 500,
//                       }}
//                       className={classes.priceTag}
//                     >
//                       Total
//                     </Typography>
//                   </div>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 {/*///////////////////////////////////////////////////////////////   Sale Card */}

//                 <Card className={classes.purchaseCard}>
//                   <Avatar alt="Remy Sharp" src="rupee6.jpg" />
//                   {/* <IconButton className={classes.moreStyle}>
//                     <MoreVert />
//                   </IconButton> */}
//                   <Typography
//                     variant="h5"
//                     style={{
//                       marginTop: 20,
//                       fontWeight: 530,
//                     }}
//                     className={classes.priceTag}
//                   >
//                     ₹ 5000
//                   </Typography>
//                   <div style={{ display: "flex" }}>
//                     <Typography
//                       variant="body1"
//                       style={{
//                         marginTop: 10,
//                         fontWeight: 400,
//                       }}
//                       className={classes.priceTag}
//                     >
//                       ₹ 15,000
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       style={{
//                         marginLeft: 10,
//                         marginTop: 12,
//                         fontWeight: 500,
//                       }}
//                       className={classes.priceTag}
//                     >
//                       Total
//                     </Typography>
//                   </div>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 {/*///////////////////////////////////////////////////////////////   Available Codes Card */}

//                 <Card className={classes.purchaseCard}>
//                   <Typography variant="h5" className={classes.codesStyle}>
//                     Available Codes
//                   </Typography>
//                   <Typography
//                     variant="h4"
//                     style={{ marginTop: 25 }}
//                     className={classes.codesStyle}
//                   >
//                     340
//                   </Typography>
//                 </Card>
//               </Grid>
//             </Grid>
//           </div>

//           <div style={{ marginLeft: 20 }}>
//             <Grid container>
//               <Grid item xs={12} sm={8}>
//                 {/* <Card className={classes.purchaseCard}></Card> */}
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 {/*/////////////////////////////////////////////////////        Total Codes */}
//                 <Card className={classes.totalCodes}>
//                   <Typography variant="h5" className={classes.codesStyle}>
//                     Top 10 Codes
//                   </Typography>

//                   {/*//////////////////////////////////////////////////          List Of Available Codes */}
//                   {Lists.map((item, index) => (
//                     <List
//                       className={classes.listStyle}
//                       component="nav"
//                       aria-label="available codes"
//                       key={index}
//                     >
//                       <Typography>{item.sno}</Typography>
//                       <div
//                         style={{
//                           marginTop: -25,
//                           float: "right",
//                         }}
//                       >
//                         <Typography>{item.codes}</Typography>
//                       </div>
//                     </List>
//                   ))}
//                 </Card>
//               </Grid>
//             </Grid>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
