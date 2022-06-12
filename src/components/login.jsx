import React, { useContext, useState } from "react";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { loginContext } from "./providers/loginProvider";

const Login = () => {
  const { onClose, onOpen, open, loginHandler, passwordEntered, emailEntered } =
    useContext(loginContext);

  return (
    <>
      <Button onClick={onOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="login-modal">
          <Typography variant="h6" component="h2">
            Login
          </Typography>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            autoComplete="off"
            color="info"
            onChange={(e) => emailEntered(e)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
            color="info"
            onChange={(e) => passwordEntered(e)}
          />

          <Button
            variant="outlined"
            className="login-button"
            onClick={loginHandler}
          >
            Login
          </Button>
        </Box>
      </Modal>
    </>
  );
};
export default Login;
