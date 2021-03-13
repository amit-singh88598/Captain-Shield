import { Card } from "@material-ui/core";
import React from "react";
import { Gradient } from "react-gradient";

const gradients = [
  ["#403d3d", "#b5b1b1"],
  ["#403d3a", "#636060"],
];

export default function school() {
  return (
    <div className="app">
      <Card>
        <Gradient
          gradients={gradients} // required
          property="background"
          duration={3000}
          angle="45deg"
        >
          <h1>dkjbjbhfjds</h1>
        </Gradient>
      </Card>
    </div>
  );
}
