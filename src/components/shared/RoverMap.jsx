import React from "react";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useStyles } from "./../../hooks/useStyles";

const RoverMap = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box mb={2}>
          <Typography variant="h6">Rover's Ubication</Typography>
          <Typography>Lat/Long</Typography>
          <Typography className={classes.textGrey}>
            {props.Latitude}/{props.Longitude}
          </Typography>
        </Box>
        <Map center={props.positionInitial} zoom={14} className={classes.map}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[props.Latitude, props.Longitude]}>
            <Popup>Rover's Ubication</Popup>
          </Marker>
        </Map>
        {props.loadingAfterCharge && (
          <div className={classes.spinner}>
            <CircularProgress color="primary" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RoverMap;
