import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  // Navbar
  titleAppBar: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  appBar: {
    // backgroundColor: theme.palette.primary.dark,
  },
  textWhite: {
    color: theme.palette.common.white,
    textDecoration: "none",
  },
  space: {
    flexGrow: 1,
    textAlign: "center",
  },
  spinner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
  map: {
    align: "center",
    height: "450px",
    width: "100%",
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
  },
  cardMaxWidth: {
    // maxWidth: 345,
    maxWidth: "100%",
  },
  cardMedia: {
    width: "100px",
    height: "100px",
  },
  centerImg: {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
  cardContentRow: {
    display: "flex",
    flexDirection: "row",
  },
  cardContentColumnCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#343a40",
    position: "fixed",
    bottom: "0px",
    width: "100%",
    color: theme.palette.common.white,
  },
  textGrey: {
    color: "#AAA",
  },
  iconWhite: {
    backgroundColor: "#fff",
  },
  iconSatellite: {
    height: "50px",
    paddingLeft: "8px",
  },
}));
