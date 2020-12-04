import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    width: "100px",
    height: "100px",
  },
  centerImg: {
    display: "flex",
    justifyContent: "center",
    marginTop: "16px",
  },
}));

const LitleCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const openGps = () => history.push("/data/gps");

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openGps}>
        <div className={classes.centerImg}>
          <CardMedia
            className={classes.media}
            image={`${process.env.PUBLIC_URL}/assets/images/${props.data.src}`}
            title="Satellite"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LitleCard;
