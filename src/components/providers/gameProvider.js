import { getThemeProps } from "@mui/system";
import { useContext, useState, createContext } from "react";

export const gameContext = createContext();

export default function GameProvider(props) {
  const [cards, setCards] = useState([0, 1]);
  const [cardTurns, setCardTurns] = useState(0);
  const [clicked0, setClicked0] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const exportValues = {
    cards,
    setCards,
    cardTurns,
    setCardTurns,
    clicked0,
    setClicked0,
    clicked1,
    setClicked1,
  };
  return (
    <gameContext.Provider value={exportValues}>
      {props.children}
    </gameContext.Provider>
  );
}
export const useGame = () => useContext(gameContext);
