import React from "react";
import useGetGps from "../hooks/useGetGps";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useStyles } from "./../hooks/useStyles";

const Gps = () => {
  const classes = useStyles();
  const {
    Latitude,
    Longitude,
    positionInitial,
    loading,
    loadingAfterCharge,
  } = useGetGps();

  return (
    <>
      {loading ? (
        <div className={classes.spinner}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h6" align="center" className={classes.textWhite}>
                Rover's Ubication
              </Typography>
              <Typography className={classes.textGrey}>
                Latitud: {Latitude}
              </Typography>
              <Typography className={classes.textGrey}>
                Longitud: {Longitude}
              </Typography>
            </Box>
            <Map center={positionInitial} zoom={14} className={classes.map}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[Latitude, Longitude]}>
                <Popup>Rover's Ubication</Popup>
              </Marker>
            </Map>
            {loadingAfterCharge && (
              <div className={classes.spinner}>
                <CircularProgress color="primary" />
              </div>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Gps;
