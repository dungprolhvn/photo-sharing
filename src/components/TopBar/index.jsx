import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
    return (
      <AppBar className="topbar-appBar" position="absolute" sx={{ zIndex: 900 }}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Nguyễn Đình Dũng
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
