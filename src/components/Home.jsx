import { Grid } from "@material-ui/core";
import React from "react";
import LitleCard from "./shared/LitleCard";
import { useHistory } from "react-router-dom";
import { useStyles } from "./../hooks/useStyles";

const Home = () => {
  const history = useHistory();
  const classes = useStyles();

  const openGps = () => history.push("/data/gps");
  const openVelocimeter = () => history.push("/data/velocimeter");
  const openAltimeter = () => history.push("/data/altimeter");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <LitleCard title="GPS" icon="satellite.png" funcion={openGps} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LitleCard
          title="Velocimeter"
          icon="velocimetro.svg"
          funcion={openVelocimeter}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <LitleCard
          title="Altimeter"
          icon="altimeter-w.png"
          funcion={openAltimeter}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
