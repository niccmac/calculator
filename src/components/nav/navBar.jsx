import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Login from "../login";
// TODO contect provider > state show component
const NavBarTab = () => {
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
          <Tab label={<Login />} />
          <Tab label="Calculator" />
          <Tab label="Tasks" />
          <Tab label="Game" />
        </Tabs>
      </Box>
    </>
  );
};
export default NavBarTab;
