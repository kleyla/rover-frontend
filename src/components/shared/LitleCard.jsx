import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./../../hooks/useStyles";

const LitleCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const openGps = () => history.push("/data/gps");

  return (
    <Card className={`${classes.cardMaxWidth} ${classes.card}`}>
      <CardActionArea onClick={openGps}>
        <div className={classes.centerImg}>
          <CardMedia
            className={classes.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/images/${props.data.src}`}
            title="Satellite"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LitleCard;
