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
import { icon } from "@fortawesome/fontawesome-svg-core";
import { v4 as uuidv4 } from "uuid";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
const icons = [
  { icon: faCoffee },
  { icon: faGhost },
  { icon: faBinoculars },
  { icon: faFrog },
  { icon: faHotdog },
  { icon: faSocks },
  { icon: faWorm },
  { icon: faSkullCrossbones },
];
const CardList = () => {
  // const [game, setGame] = useState(true);
  const [cards, setCards] = useState([]);
  const [match, setMatched] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matchIcons, setMatchIcons] = useState([]);
  const [turns, setTurns] = useState(0);

  const generateGame = () => {
    const shuffledIcons = [...icons, ...icons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: uuidv4() }));
    setCards(shuffledIcons);
    setTurns(0);
    // console.log(cards, turns);
    // console.log(shuffledIcons);
  };

  const handleCardClick = (event, cardID, cardIcon) => {
    if (flipped.length === 1) {
      setFlipped((prev) => [...prev, cardID]);
      setMatchIcons((prev) => [...prev, cardIcon]);
      setTurns((turns) => turns + 1);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      // clearTimeout(timeout.current);
      setFlipped([cardID]);
      setMatchIcons([cardIcon]);
    }
  };

  const checkFlipped = (cardID) => {
    if (flipped[0] === cardID || flipped[1] === cardID) {
      return "true";
    }
    return "false";
  };

  const checkDisabled = (cardID) => {
    // match.((id) => {
    //   if (id === cardID) {
    //     return "true";
    //   }
    //   return "false";
    // });
  };
  // Check match
  if (matchIcons.length === 2) {
    console.log("length 2");

    if (matchIcons[0].iconName === matchIcons[1].iconName) {
      console.log("matched");
      setMatched((prev) => [...prev, flipped[0], flipped[1]]);
      setFlipped([]);
      setMatchIcons([]);
    }
  }

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
        {cards.map((card) => {
          return (
            <Grid item md={4} key={card.id}>
              <CardActionArea>
                <FontAwesomeIcon
                  key={card}
                  isdisabled={checkDisabled(card.id)}
                  isinactive={"false"}
                  isflipped={checkFlipped(card.id)}
                  icon={flipped.includes(card.id) ? card.icon : faDiamond}
                  padding={2}
                  onClick={(event) =>
                    handleCardClick(event, card.id, card.icon)
                  }
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
