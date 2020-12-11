import React from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import ReactSpeedometer from "react-d3-speedometer";
import { useStyles } from "./../../hooks/useStyles";

const SpeedCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContentColumnCenter}>
        <ReactSpeedometer
          maxValue={500}
          value={props.Speed}
          segments={10}
          needleColor="red"
          startColor="#39ff14"
          endColor="#f80000"
          textColor="grey"
          textColor="#AAA"
          width={340}
          height={200}
        />
        <Typography variant="h6">Speed</Typography>
      </CardContent>
    </Card>
  );
};
export default SpeedCard;
