import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGhost,
  faBinoculars,
  faFrog,
  faHotdog,
  faSocks,
  faWorm,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { Grid, Card } from "@mui/material";

const CardGame = () => {
  return (
    <div className="card-game">
      <Grid container spacing={2} columns={4}>
        <Grid item xs={1}>
          <Card className="card" />
          <FontAwesomeIcon icon={faCoffee} />

          <FontAwesomeIcon icon={faGhost} />

          <FontAwesomeIcon icon={faBinoculars} />

          <FontAwesomeIcon icon={faFrog} />
        </Grid>
        <Grid item xs={1}>
          <FontAwesomeIcon icon={faHotdog} />

          <FontAwesomeIcon icon={faSocks} />

          <FontAwesomeIcon icon={faWorm} />

          <FontAwesomeIcon icon={faSkullCrossbones} />
        </Grid>
        <Grid item xs={1}>
          <FontAwesomeIcon icon={faCoffee} />

          <FontAwesomeIcon icon={faGhost} />

          <FontAwesomeIcon icon={faBinoculars} />

          <FontAwesomeIcon icon={faFrog} />
        </Grid>
        <Grid item xs={1}>
          <FontAwesomeIcon icon={faHotdog} />

          <FontAwesomeIcon icon={faSocks} />

          <FontAwesomeIcon icon={faWorm} />

          <FontAwesomeIcon icon={faSkullCrossbones} />
        </Grid>
      </Grid>
    </div>
  );
};
export default CardGame;
