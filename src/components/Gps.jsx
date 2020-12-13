import React from "react";
import useGetGps from "../hooks/useGetGps";
import { CircularProgress, Grid } from "@material-ui/core";
import { useStyles } from "./../hooks/useStyles";
import RoverMap from "./shared/RoverMap";
import SatelliteCard from "./shared/SatelliteCard";
import SpeedCard from "./shared/SpeedCard";
import HeightCard from "./shared/HeightCard";

const Gps = () => {
  const classes = useStyles();
  const {
    Latitude,
    Longitude,
    positionInitial,
    NroSats,
    Speed,
    Height,
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
          <Grid container item xs={12} md={6} lg={4}>
            <Grid item xs={12}>
              <RoverMap
                positionInitial={positionInitial}
                Latitude={Latitude}
                Longitude={Longitude}
                loadingAfterCharge={loadingAfterCharge}
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6} lg={4} spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <SatelliteCard NroSats={NroSats} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <SpeedCard Speed={Speed} />
            </Grid>
          </Grid>
          <Grid container item xs={12} md={6} lg={4} spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <HeightCard Height={Height} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Gps;
