import React from "react";
import useGetGps from "../hooks/useGetGps";
import { CircularProgress, Grid } from "@material-ui/core";
import { useStyles } from "./../hooks/useStyles";
import SpeedCard from "./shared/SpeedCard";

const Gps = () => {
  const classes = useStyles();
  const { Speed, loading } = useGetGps();

  return (
    <>
      {loading ? (
        <div className={classes.spinner}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid container item xs={12} md={6} lg={4} spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <SpeedCard Speed={Speed} />
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Gps;
