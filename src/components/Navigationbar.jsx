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
              <Button variant="text" color="inherit">
                placeholder
              </Button>
              <Button variant="text" color="inherit">
                placeholder
              </Button>
              <Button variant="contained" color="success">
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
