import React from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { LinearGauge } from "react-canvas-gauges";
import { useStyles } from "./../../hooks/useStyles";

const HeightCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContentRow}>
        <LinearGauge
          width={150}
          height={400}
          units="metros"
          minValue={0}
          maxValue={220}
          majorTicks={[
            "0",
            "20",
            "40",
            "60",
            "80",
            "100",
            "120",
            "140",
            "160",
            "180",
            "200",
            "220",
          ]}
          minorTicks={2}
          strokeTicks="true"
          colorPlate="#fff"
          borderShadowWidth={0}
          borders="false"
          needleType="arrow"
          needleWidth={2}
          animationDuration={1500}
          animationRule="linear"
          tickSide="left"
          numberSide="left"
          needleSide="left"
          barStrokeWidth={7}
          value={props.Height}
          barBeginCircle={0}
        ></LinearGauge>
        <Box mx={6}>
          <Typography variant="h6">Height</Typography>
          <Typography variant="h3">{props.Height}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeightCard;
