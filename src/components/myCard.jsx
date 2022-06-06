import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardActionArea } from "@mui/material";
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

const MyCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked(!clicked);
  return (
    // <div onClick={(clicked) => setClicked(!clicked)}>
    <CardActionArea>
      {clicked ? (
        <FontAwesomeIcon icon={props.picker} onClick={() => toggleClicked()} />
      ) : (
        <Card className="card" onClick={() => toggleClicked()} />
      )}
    </CardActionArea>
  );
};
export default MyCard;
