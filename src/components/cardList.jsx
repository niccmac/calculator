import { CardActionArea, Button, Grid, Card } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
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
  faDiamond,
} from "@fortawesome/free-solid-svg-icons";
import MyCard from "./myCard";
import GameProvider, { gameContext, useGame } from "./providers/gameProvider";

const CardList = () => {
  // const [game, setGame] = useState(true);
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
  const [flipped, setFlipped] = useState([]);
  const [turns, setTurns] = useState(0);
  const randomIconsArray = [];

  const generateGame = () => {
    for (let i = 0; i < 16; i++) {
      const randomIconPicker = () => {
        let picker = icons[Math.floor(Math.random() * icons.length)];
        randomIconsArray.push(picker);
        let index = icons.indexOf(picker);
        icons.splice(index, 1);
      };
      randomIconPicker();
    }
  };
  generateGame();

  const handleCardClick = (event, index) => {
    if (flipped.length === 1) {
      setFlipped((prev) => [...prev, index]);
      setTurns((turns) => turns + 1);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      // clearTimeout(timeout.current);
      setFlipped([index]);
    }
  };

  return (
    <GameProvider>
      <Button onClick={generateGame}> New Game</Button>
      <Grid
        className="card-game"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={16}
        borderRadius={10}
        padding={5}
      >
        {randomIconsArray.map((icon, index) => {
          return (
            <Grid item md={4} key={index}>
              <CardActionArea>
                <FontAwesomeIcon
                  key={index}
                  isDisabled={false}
                  isInactive={false}
                  isFlipped={flipped.includes(index)}
                  icon={flipped.includes(index) ? icon : faDiamond}
                  padding={2}
                  onClick={(event) => handleCardClick(event, index)}
                />
              </CardActionArea>
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid className="card-game" container spacing={2} columns={4}>
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
      </Grid> */}
    </GameProvider>
  );
};

export default CardList;
