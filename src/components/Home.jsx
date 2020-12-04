import { Grid } from "@material-ui/core";
import React from "react";
import { cardList } from "./../data/cardList";
import LitleCard from "./shared/LitleCard";

const Home = () => {
  return (
    <Grid container spacing={2}>
      {cardList.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LitleCard data={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
