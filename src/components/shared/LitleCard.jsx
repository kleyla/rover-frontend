import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./../../hooks/useStyles";

const LitleCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={`${classes.cardMaxWidth} ${classes.card}`}>
      <CardActionArea onClick={props.funcion}>
        <div className={classes.centerImg}>
          <CardMedia
            className={classes.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/images/${props.icon}`}
            title="Satellite"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LitleCard;
