import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import SignupPage from "./SignupPage";

const Navigationbar = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit">
              Tech Incubator
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={2}>
              <Button href="/home" variant="text" color="inherit">
                Home
              </Button>
              <Button variant="text" href="/tasks" color="inherit">
                View Tasks
              </Button>
              <Button href="/signup" variant="contained" color="success">
                Signup
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </BrowserRouter>
    </div>
  );
};

export default Navigationbar;
