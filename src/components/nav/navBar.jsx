import React, { useContext, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Login from "../login";
import Calculator from "../calculator";
import { loginContext } from "../providers/loginProvider";
import { calcContext } from "../providers/calcProvider";
import ToDoProvider, { toDoContext } from "../providers/toDoProvider";

// TODO contect provider > state show component
const NavBarTab = () => {
  const [tab, setTab] = useState(false);
  const { onOpen } = useContext(loginContext);
  const { toggleCalc, calcOpen } = useContext(calcContext);
  const { toggleTodo, todoOpen } = useContext(toDoContext);
  const closeTabsOpenCalc = () => {
    if (!calcOpen && todoOpen) {
      toggleTodo();
    }
    toggleCalc();
  };

  return (
    <>
      <Box
        className="nav-bar-tabs"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs aria-label="basic tabs example" value={tab}>
          <Tab label="Login" onClick={onOpen} value="login" />
          <Login />
          <Tab
            label="Calculator"
            onClick={closeTabsOpenCalc}
            value="Calculator"
          />
          <Tab
            label="Tasks"
            value="tasks"
            onClick={() => {
              toggleTodo();
            }}
          />
          <Tab label="Game" value="game" />
        </Tabs>
      </Box>
    </>
  );
};
export default NavBarTab;
