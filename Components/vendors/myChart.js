// import React, { Component } from "react";
// import LineChart from "react-linechart";
// import "../node_modules/react-linechart/dist/styles.css";

// const data = [
//   {
//     color: "steelblue",
//     points: [
//       { x: 1, y: 2 },
//       { x: 3, y: 5 },
//       { x: 10, y: -3 },
//     ],
//   },
// ];

// export default function MyChart() {
//   return (
//     <div>
//       <div className="App">
//         <h1>My First LineChart</h1>
//         <LineChart width={600} height={400} data={data} />
//       </div>
//     </div>
//   );
// }

// import React from "react";

import { Card, makeStyles } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import React from "react";
import Chart from "react-google-charts";

const useStyle = makeStyles((theme) => ({
  chart: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    maxWidth: 900,
  },
}));

export default function MyChart() {
  const classes = useStyle();

  return (
    <div>
      {/* <Chart
        className={classes.chart}
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["January", 9],
          ["February", 2],
          ["March", 2],
          ["April", 2],
          ["May", 7],
          ["June", 5],
          ["July", 2],
          ["August", 2],
          ["September", 2],
          ["October", 7],
          ["November", 2],
          ["December", 1],
        ]}
        options={{
          title: "Codes Details",
        }}
        rootProps={{ "data-testid": "1" }}
      /> */}

      <Chart
        width={"600px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "dogs"],
          [0, 0],
          [1, 25],
          [2, 100],
          [3, 17],
          [4, 18],
          [5, 9],
          [6, 11],
          [7, 27],
          [8, 33],
          [9, 40],
          [10, 32],
          [11, 35],
        ]}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Popularity",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}
