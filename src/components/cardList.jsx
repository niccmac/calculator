import { Grid, Card, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import MyCard from "./myCard";
const CardList = () => {
  const [game, setGame] = useState(true);
  const icons = [
    faCoffee,
    faGhost,
    faBinoculars,
    faFrog,
    faHotdog,
    faSocks,
    faWorm,
    faSkullCrossbones,
    faCoffee,
    faGhost,
    faBinoculars,
    faFrog,
    faHotdog,
    faSocks,
    faWorm,
    faSkullCrossbones,
  ];
  const randomIconsArray = [];
  const generateGame = () => {
    // setGame(false);
    for (let i = 0; i < 16; i++) {
      const randomIconPicker = () => {
        let picker = icons[Math.floor(Math.random() * icons.length)];
        randomIconsArray.push(picker);
        let index = icons.indexOf(picker);
        icons.splice(index, 1);
      };
      randomIconPicker();
    }
    // setGame(true);
  };

  generateGame();

  return (
    <>
      <Button onClick={generateGame}> New Game</Button>
      <Grid className="card-game" container spacing={2} columns={4}>
        <Grid item xs={1} className="card-list">
          <MyCard picker={randomIconsArray[0]} />
          <MyCard picker={randomIconsArray[1]} />
          <MyCard picker={randomIconsArray[2]} />
          <MyCard picker={randomIconsArray[3]} />
        </Grid>
        <Grid item xs={1} className="card-list">
          <MyCard picker={randomIconsArray[4]} />
          <MyCard picker={randomIconsArray[5]} />
          <MyCard picker={randomIconsArray[6]} />
          <MyCard picker={randomIconsArray[7]} />
        </Grid>
        <Grid item xs={1} className="card-list">
          <MyCard picker={randomIconsArray[8]} />
          <MyCard picker={randomIconsArray[9]} />
          <MyCard picker={randomIconsArray[10]} />
          <MyCard picker={randomIconsArray[11]} />
        </Grid>
        <Grid item xs={1} className="card-list">
          <MyCard picker={randomIconsArray[12]} />
          <MyCard picker={randomIconsArray[13]} />
          <MyCard picker={randomIconsArray[14]} />
          <MyCard picker={randomIconsArray[15]} />
        </Grid>
      </Grid>
    </>
  );
};

export default CardList;
