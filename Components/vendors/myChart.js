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
