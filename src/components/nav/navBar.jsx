import React, { useContext } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Login from "../login";
import Calculator from "../calculator";
import { loginContext } from "../providers/loginProvider";

// TODO contect provider > state show component
const NavBarTab = () => {
  const { onOpen } = useContext(loginContext);
  return (
    <>
      <Box
        className="nav-bar-tabs"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          // value={value}
          // onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" onClick={onOpen} />
          <Login />

          <Tab label="Calculator" />
          <Tab label="Tasks" />
          <Tab label="Game" />
        </Tabs>
      </Box>
    </>
  );
};
export default NavBarTab;
