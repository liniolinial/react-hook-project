import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

export default function Todo() {
  return (
    <div>
      <h1>TODOS</h1>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "fafafa",
        }}
        elevation={0}>
        <AppBar color='primary' postition='static' style={{ height: "64px" }}>
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  );
}
