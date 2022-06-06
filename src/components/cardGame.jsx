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
import { Grid, Card, Button } from "@mui/material";
import CardList from "./cardList";

const CardGame = () => {
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [cardTurns, setCardTurns] = useState();

  if (cardOne === cardTwo) {
    // Alert
    // then cards become unclickable
    // setCardTurns += 1
    // setCardOne();
    // setCardTwo();
  } else {
    // setCardTurns += 1
    // setCardOne();
    // setCardTwo();
  }

  return (
    <>
      <CardList />{" "}
    </>
  );
};
export default CardGame;
