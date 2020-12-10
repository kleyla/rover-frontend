import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  spinner: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
  map: {
    align: "center",
    height: "300px",
    width: "100%",
    "@media (min-width: 1280px)": {
      marginTop: theme.spacing(5),
      backgroundColor: "red",
    },
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
  },
  cardMaxWidth: {
    maxWidth: 345,
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
}));
