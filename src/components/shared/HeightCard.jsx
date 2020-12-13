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
          height={600}
          units="metros"
          minValue={100}
          maxValue={4000}
          majorTicks={[
            "100",
            "200",
            "400",
            "600",
            "800",
            "1000",
            "1200",
            "1400",
            "1600",
            "1800",
            "2000",
            "2200",
            "2400",
            "2600",
            "2800",
            "3000",
            "3200",
            "3400",
            "3600",
            "3800",
            "4000",
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
          <Typography variant="h4" className={classes.textGrey}>{props.Height} m</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeightCard;
