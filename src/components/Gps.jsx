import React from "react";
import useGetGps from "../hooks/useGetGps";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  spinner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
  map: {
    align: "center",
    height: "400px",
    width: "100%",
  },
}));

const Gps = () => {
  const classes = useStyles();
  const {
    latitude,
    longitude,
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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h6">Rover's Ubication</Typography>
            </Box>
            <Map center={positionInitial} zoom={13} className={classes.map}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]}>
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
