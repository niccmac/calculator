import React, { useState } from "react";
const CardGame = () => {
  const [cardIcons, setCardIcons] =
    useState[
      ("fa-solid fa-crab",
      "fa-solid fa-duck",
      "fa-solid fa-croissant",
      "fa-solid fa-ghost",
      "fa-solid fa-pineapple",
      "fa-solid fa-user-astronaut",
      "fa-solid fa-socks",
      "fa-solid fa-tree-palm")
    ];
  const cardList = () => {
    for (let i = 0; i < 17; i++) {}
  };
  return <div className="card-game"></div>;
};
export default CardGame;
