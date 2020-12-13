import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./../../hooks/useStyles";

const SatelliteCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContentRow}>
        <CardMedia
          className={classes.cardMedia}
          image={`${process.env.PUBLIC_URL}/assets/images/satellite.svg`}
          title="Satellite"
        />
        <Box mx={6}>
          <Typography variant="h6">Number of Satellites</Typography>
          <Typography variant="h4" className={classes.textGrey}>
            {props.NroSats}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SatelliteCard;
