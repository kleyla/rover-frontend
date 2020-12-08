import React from "react";
import useGetGps from "../hooks/useGetGps";
import { Box, CircularProgress, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./../hooks/useStyles";
import RoverMap from "./shared/RoverMap";
import SatelliteCard from "./shared/SatelliteCard";

const Gps = () => {
  const classes = useStyles();
  const {
    Latitude,
    Longitude,
    positionInitial,
    NroSats,
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
          <Grid item xs={12} md={4}>
            <RoverMap
              positionInitial={positionInitial}
              Latitude={Latitude}
              Longitude={Longitude}
              loadingAfterCharge={loadingAfterCharge}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SatelliteCard NroSats={NroSats} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Gps;
