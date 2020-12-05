import React from "react";
import useGetGps from "./../hooks/useGetGps";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

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
  const { latitude, longitude, positionInitial, loading } = useGetGps();
  const coords = [-17.7834936, -63.1820853];
  console.log(latitude);
  console.log(positionInitial);

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
            <MapContainer center={coords} zoom={13} className={classes.map}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coords}>
                <Popup>Rover's Ubication</Popup>
              </Marker>
            </MapContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Gps;
